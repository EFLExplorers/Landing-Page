import Image from "next/image";
import styles from "./Logo.module.css";
import { Logo } from "@/assets/logo";

interface LogoProps {
  width?: number;
  height?: number;
}

export const LogoComponent = ({ width = 150, height = 50 }: LogoProps) => {
  return (
    <Image
      src={Logo}
      alt="ESL Explorers"
      width={width}
      height={height}
      priority
      className={styles.logo}
    />
  );
};

export default LogoComponent;
