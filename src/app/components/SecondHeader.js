"use client";

import Link from "next/link";
import styles from "../styles/SecondHeader.module.css";

function SecondHeader() {
  return (
    <header className={styles.secondHeader}>
      <div className={styles.headerContainer}>
        {/* Brand Name */}
        <Link href="/" className={styles.brandName}>
          Ohr
        </Link>

        <nav className={styles.headerNav}>
          <Link href="/">Ohr</Link>
          <Link href="/boutique-shop">Designer</Link>
          <Link href="/my-account">Account</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Header Actions */}
        <div className={styles.headerActions}>
          {/* Search */}
          <div className={styles.searchBox}>
            <span>⌕</span>

            <input type="text" placeholder="Search Fragrances" />
          </div>

          {/* User Icon */}
          <Link href="/dashboard" className={styles.headerIcon}>
            ♙
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className={styles.cartIcon}>
            🛍
            <span className={styles.cartBadge}>2</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default SecondHeader;
