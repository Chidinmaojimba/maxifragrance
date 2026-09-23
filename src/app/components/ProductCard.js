import Image from "next/image";
import { FiEye, FiShoppingBag, FiStar } from "react-icons/fi";

import styles from "../styles/ProductCard.module.css";

export default function ProductCard({
  title,
  collection,
  price,
  image,
  rating,
  reviews,
}) {
  return (
    <article className={styles.card}>
      {/* Product Image */}
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />

        {/* Quick View */}
        <button className={styles.quickView}>
          <FiEye />
          <span>Quick View</span>
        </button>

        {/* Add to Cart */}
        <button
          className={styles.cartButton}
          aria-label={`Add ${title} to cart`}
        >
          <FiShoppingBag />
        </button>
      </div>

      {/* Product Information */}
      <div className={styles.info}>
        <p className={styles.collection}>{collection}</p>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.bottom}>
          <div className={styles.rating}>
            <div className={styles.stars}>
              {Array.from({ length: 5 }, (_, index) => (
                <FiStar
                  key={index}
                  className={
                    index < Math.round(rating) ? styles.starFilled : styles.star
                  }
                />
              ))}
            </div>

            <span>({reviews})</span>
          </div>

          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </article>
  );
}
