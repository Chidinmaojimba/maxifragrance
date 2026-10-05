// import Link from "next/link";
// import styles from "../styles/Navbar.module.css";

// export default function Navbar() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>OHR</div>

//       <nav className={styles.nav}>
//         <Link href="/">Home</Link>
//         <Link href="/boutique-shop">Shop</Link>
//         <Link href="/my-account">Account</Link>
//         <Link href="/about">About</Link>
//         <Link href="/contact">Contact</Link>
//       </nav>

//       <Link href="/boutique-shop" className={styles.button}>
//         Shop Now
//       </Link>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link href="/" className={styles.logo}>
        OHR
      </Link>

      {/* Navigation */}
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/boutique-shop">Shop</Link>
        <Link href="/my-account">Account</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Search + Cart + Shop */}
      <div className={styles.actions}>
        {/* Search */}
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>⌕</span>
          <input type="text" placeholder="Search Fragrances" />
        </div>

        {/* Cart */}
        <Link href="/cart" className={styles.cartIcon}>
          🛍
          <span className={styles.cartBadge}>2</span>
        </Link>

        {/* Shop Now */}
        <Link href="/boutique-shop" className={styles.button}>
          Shop Now
        </Link>
      </div>
    </header>
  );
}
