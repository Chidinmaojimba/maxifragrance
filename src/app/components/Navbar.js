import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>OHR</div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/boutique-shop">Shop</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <Link href="/boutique-shop" className={styles.button}>
        Shop Now
      </Link>
    </header>
  );
}
