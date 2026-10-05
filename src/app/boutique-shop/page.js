"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ShopHeader from "../components/ShopHeader";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import styles from "../styles/Boutique-shop.module.css";

export default function BoutiqueShop() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <ShopHeader />

        <section className={styles.shopContainer}>
          <Sidebar />

          <ProductGrid />
        </section>
      </main>

      <Footer />
    </>
  );
}
