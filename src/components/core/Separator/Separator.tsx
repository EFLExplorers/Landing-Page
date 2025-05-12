import React from "react";
import { classNames } from "../utils";
import styles from "./Separator.module.css";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

export const Separator: React.FC<SeparatorProps> = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) => {
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      className={classNames(styles.separator, styles[orientation], className)}
      {...props}
    />
  );
};
