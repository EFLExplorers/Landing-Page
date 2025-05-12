import React, { useEffect, useRef } from "react";
import { classNames } from "../utils";
import { Icons } from "../Icon";
import styles from "./Sheet.module.css";

export interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  children,
  className,
  side = "right",
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={onClose}>
      <div
        className={classNames(styles.sheet, styles[side], className)}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <Icons.X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};
