"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/Cta.module.css";

export default function Cta() {
  const router = useRouter();

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

      <button
        className={styles.shopBtn}
        onClick={() => router.push("/boutique-shop")}
      >
        Shop Now
      </button>
    </section>
  );
}
