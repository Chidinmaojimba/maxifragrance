import styles from "../styles/ShopHeader.module.css";

export default function ShopHeader() {
  return (
    <section className={styles.header}>
      <h1>Boutique Shop</h1>

      <p>
        Curated olfactory experiences for the modern connoisseur. Explore our
        signature collections and bespoke scents.
      </p>
    </section>
  );
}
