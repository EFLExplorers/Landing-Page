import Link from "next/link";
import {
  LocationIcon,
  EmailIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@/components/ui/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/about" className={styles.navLink}>
        About
      </Link>
      <Link href="/courses" className={styles.navLink}>
        Courses
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className={styles.dropdownTrigger}>
          Resources
          <ChevronRightIcon className={styles.dropdownIcon} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className={styles.dropdownContent}>
          <DropdownMenuItem className={styles.dropdownItem}>
            <Link href="/resources/teachers" className={styles.dropdownLink}>
              For Teachers
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className={styles.dropdownItem}>
            <Link href="/resources/students" className={styles.dropdownLink}>
              For Students
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href="/contact" className={styles.navLink}>
        Contact
      </Link>
    </nav>
  );
};

export { Navbar as default };
