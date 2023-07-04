"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <img
        src="hack-illinois-logo.svg"
        alt="Hack Illinois Logo"
        className={styles.logo}
      />
      <div className={styles.navigation_container}>
        <Link
          href="/"
          className={`${styles.navigation} ${
            path === "/" ? styles.active_navigation : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/leaderboard"
          className={`${styles.navigation} ${
            path === "/leaderboard" ? styles.active_navigation : ""
          }`}
        >
          Leaderboard
        </Link>
      </div>
    </header>
  );
};

export default Header;
