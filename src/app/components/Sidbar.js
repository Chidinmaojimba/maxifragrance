"use client";

import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Collections */}

      <div className={styles.card}>
        <h3>Collections</h3>

        <ul>
          <li>
            <span>Private Reserve</span>
            <span>12</span>
          </li>

          <li>
            <span>Heritage Series</span>
            <span>08</span>
          </li>

          <li>
            <span>Seasonal Edit</span>
            <span>05</span>
          </li>
        </ul>
      </div>

      {/* Fragrance Families */}

      <div className={styles.card}>
        <h3>Fragrance Families</h3>

        <div className={styles.tags}>
          <button>Woody</button>
          <button>Floral</button>
          <button>Oud</button>
          <button>Citrus</button>
          <button>Oriental</button>
        </div>
      </div>

      {/* Price */}

      <div className={styles.card}>
        <h3>Price Range</h3>

        <input type="range" />

        <div className={styles.price}>
          <span>$80</span>
          <span>$450+</span>
        </div>
      </div>

      {/* Size */}

      <div className={styles.card}>
        <h3>Size</h3>

        <div className={styles.sizeGrid}>
          <button>50ml</button>
          <button>100ml</button>
          <button>250ml</button>
          <button>Sets</button>
        </div>
      </div>
    </aside>
  );
}
