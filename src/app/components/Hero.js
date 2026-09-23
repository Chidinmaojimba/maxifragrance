"use client";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.badge}>Luxury Fragrance Collection</span>

        <h1>
          Discover
          <br />
          Your Signature
          <br />
          Scent
        </h1>

        <p>
          Explore premium perfumes, candles, reed diffusers, and car diffusers
          carefully curated for elegance, sophistication and lasting
          impressions.
        </p>

        <div className={styles.buttons}>
          <button
            className={styles.shop}
            onClick={() => router.push("/boutique-shop")}
          >
            Shop Collection
          </button>

          <button className={styles.learn}>Learn More</button>
        </div>
      </div>

      <div className={styles.right}>
        <Image
          src="/images/difset.webp"
          alt="Hero Perfume"
          width={550}
          height={650}
          priority
        />
      </div>
    </section>
  );
}
