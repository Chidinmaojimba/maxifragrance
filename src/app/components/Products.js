// "use client";
import Image from "next/image";
import styles from "../styles/Products.module.css";

const products = [
  {
    image: "/images/candles.webp",
    name: "Maxi Savoir Candle",
    price: "₦18,000",
  },
  {
    image: "/images/diffuser.webp",
    name: "Reed Diffuser",
    price: "₦22,000",
  },
  {
    image: "/images/difset.webp",
    name: "Car Diffuser",
    price: "₦12,500",
  },
  {
    image: "/images/perf.webp",
    name: "Luxury Perfume",
    price: "₦38,000",
  },
];

export default function Products() {
  return (
    <section className={styles.products}>
      <h2>Featured Collection</h2>

      <p className={styles.subtitle}>
        Explore our best-selling luxury fragrances and home scent collections.
      </p>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={product.image}
              width={300}
              height={350}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <span>{product.price}</span>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
