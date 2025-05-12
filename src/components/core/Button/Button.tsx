import React, { forwardRef } from "react";
import { classNames } from "../utils";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      asChild,
      ...props
    },
    ref
  ) => {
    const buttonClasses = classNames(
      styles.button,
      styles[variant],
      styles[size],
      isLoading && styles.loading,
      disabled && styles.disabled,
      className
    );

    const content = (
      <>
        {isLoading && <span className={styles.spinner} />}
        {!isLoading && leftIcon && (
          <span className={styles.leftIcon}>{leftIcon}</span>
        )}
        <span className={styles.content}>{children}</span>
        {!isLoading && rightIcon && (
          <span className={styles.rightIcon}>{rightIcon}</span>
        )}
      </>
    );

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: buttonClasses,
        ref,
        disabled: disabled || isLoading,
        ...props,
        children: content,
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
