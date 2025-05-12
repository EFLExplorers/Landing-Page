import React, { useState, useRef, useEffect } from "react";
import { classNames } from "../utils";
import styles from "./Dropdown.module.css";

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames(styles.dropdown, className)} ref={dropdownRef}>
      <div className={styles.trigger} onClick={toggleDropdown}>
        {trigger}
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};
