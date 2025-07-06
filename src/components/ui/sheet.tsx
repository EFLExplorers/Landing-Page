"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CloseIcon } from "./icons/CloseIcon";
import styles from "./styles/sheet.module.css";

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

interface SheetTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

interface SheetContentProps {
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
}

interface SheetHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface SheetFooterProps {
  children: React.ReactNode;
  className?: string;
}

interface SheetTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface SheetDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const Sheet = ({ open, onOpenChange, children }: SheetProps) => {
  const [isOpen, setIsOpen] = React.useState(open ?? false);

  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <SheetContext.Provider value={{ isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
};

const SheetContext = React.createContext<{
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}>({
  isOpen: false,
  onOpenChange: () => {},
});

export const SheetTrigger = ({ children, asChild }: SheetTriggerProps) => {
  const { onOpenChange } = React.useContext(SheetContext);
  const Comp = asChild ? Slot : "button";

  return (
    <Comp onClick={() => onOpenChange(true)} type="button">
      {children}
    </Comp>
  );
};

export const SheetContent = ({
  children,
  side = "right",
  className,
}: SheetContentProps) => {
  const { isOpen, onOpenChange } = React.useContext(SheetContext);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={() => onOpenChange(false)} />
      <div className={cn(styles.content, styles[`side-${side}`], className)}>
        <button
          className={styles.close}
          onClick={() => onOpenChange(false)}
          type="button"
        >
          <CloseIcon className={styles.closeIcon} />
          <span className={styles.srOnly}>Close</span>
        </button>
        {children}
      </div>
    </>
  );
};

export const SheetHeader = ({ children, className }: SheetHeaderProps) => (
  <div className={cn(styles.header, className)}>{children}</div>
);

export const SheetFooter = ({ children, className }: SheetFooterProps) => (
  <div className={cn(styles.footer, className)}>{children}</div>
);

export const SheetTitle = ({ children, className }: SheetTitleProps) => (
  <h2 className={cn(styles.title, className)}>{children}</h2>
);

export const SheetDescription = ({
  children,
  className,
}: SheetDescriptionProps) => (
  <p className={cn(styles.description, className)}>{children}</p>
);
