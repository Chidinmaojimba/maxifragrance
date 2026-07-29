"use client";
import styles from "../styles/Cta.module.css";

export default function Cta() {
  return (
    <section className={styles.cta}>
      <h2>
        Elevate Your Everyday
        <br />
        With Luxury Fragrance
      </h2>

      <p>
        Discover premium perfumes, scented candles, reed diffusers, and car
        diffusers crafted to leave lasting impressions.
      </p>

      <button>Shop Now</button>
    </section>
  );
}
