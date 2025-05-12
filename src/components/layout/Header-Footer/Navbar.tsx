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
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">EFL Explorers</Link>
      </div>
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className={styles.dropdownTrigger}>
            Resources
            <ChevronRightIcon className={styles.dropdownIcon} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/resources/teachers">For Teachers</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/resources/students">For Students</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export { Navbar as default };
