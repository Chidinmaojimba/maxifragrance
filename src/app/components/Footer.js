// "use client";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h2>Maxi Fragrance</h2>

          <p>
            Luxury perfumes, candles, reed diffusers and car diffusers designed
            to elevate your lifestyle.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3>Contact</h3>

          <p>Lagos, Nigeria</p>

          <p>info@maxifragrance.com</p>

          <p>+234 XXX XXX XXXX</p>
        </div>
      </div>

      <div className={styles.bottom}>
        © 2026 Maxi Fragrance. All Rights Reserved.
      </div>
    </footer>
  );
}
