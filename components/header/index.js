import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={`${styles.header} container fluid `}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle /> GOOGLE FORM
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/">HOME PAGE</Link>
        </nav>
      </div>
    </header>
  );
}
