"use client";

import * as React from "react";
import { ChevronRightIcon } from "./icons";
import styles from "./dropdown-menu.module.css";

interface DropdownMenuProps {
  children: React.ReactNode;
  className?: string;
}

interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onClick?: () => void;
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const DropdownMenu = ({ children, className }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if ((child.type as any).displayName === "DropdownMenuTrigger") {
            return React.cloneElement(
              child as React.ReactElement<DropdownMenuTriggerProps>,
              {
                onClick: () => setIsOpen(!isOpen),
                isOpen,
              }
            );
          }
          if ((child.type as any).displayName === "DropdownMenuContent") {
            return isOpen
              ? React.cloneElement(
                  child as React.ReactElement<DropdownMenuContentProps>,
                  {
                    onClose: () => setIsOpen(false),
                  }
                )
              : null;
          }
        }
        return child;
      })}
    </div>
  );
};
DropdownMenu.displayName = "DropdownMenu";

export const DropdownMenuTrigger = ({
  children,
  className,
  isOpen,
  onClick,
}: DropdownMenuTriggerProps) => {
  return (
    <button
      className={`${styles.dropdownTrigger} ${className || ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
      <ChevronRightIcon
        className={`${styles.chevronIcon} ${isOpen ? styles.rotate : ""}`}
      />
    </button>
  );
};
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export const DropdownMenuContent = ({
  children,
  className,
  onClose,
}: DropdownMenuContentProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div ref={ref} className={`${styles.dropdownContent} ${className || ""}`}>
      {children}
    </div>
  );
};
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuItem = ({
  children,
  className,
  onClick,
}: DropdownMenuItemProps) => {
  return (
    <button
      className={`${styles.dropdownItem} ${className || ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
DropdownMenuItem.displayName = "DropdownMenuItem";
