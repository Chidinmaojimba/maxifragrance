// "use client";

import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Maxi Fragrance</div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <button className={styles.button}>Shop Now</button>
    </header>
  );
}
