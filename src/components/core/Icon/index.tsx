import React, { SVGProps } from "react";
import { classNames } from "../utils";
import styles from "./Icon.module.css";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const Icon = ({
  size = 24,
  color = "currentColor",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classNames(styles.icon, className)}
      {...props}
    />
  );
};

// Location Icon
export const LocationIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </Icon>
);

// Email Icon
export const EmailIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Icon>
);

// Phone Icon
export const PhoneIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);

// Chevron Right Icon
export const ChevronRightIcon = (props: IconProps) => (
  <Icon {...props}>
    <polyline points="9 18 15 12 9 6" />
  </Icon>
);

// Chevron Down Icon
export const ChevronDownIcon = (props: IconProps) => (
  <Icon {...props}>
    <polyline points="6 9 12 15 18 9" />
  </Icon>
);

// X Icon
export const XIcon = (props: IconProps) => (
  <Icon {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Icon>
);

// Export all icons
export const Icons = {
  Location: LocationIcon,
  Email: EmailIcon,
  Phone: PhoneIcon,
  ChevronRight: ChevronRightIcon,
  ChevronDown: ChevronDownIcon,
  X: XIcon,
} as const;
