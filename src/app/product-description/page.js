"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// import Navbar from "../components/Navbar";
import SecondHeader from "../components/SecondHeader";
import Footer from "../components/Footer";

import styles from "../styles/Product-description.module.css";

const product = {
  name: "Ohr Signature Scented Candle",
  price: 15000,

  description:
    "A luxurious scented candle created to fill your space with a beautiful, calming fragrance. Perfect for relaxation, self-care, gifting and creating a warm atmosphere.",

  images: [
    "/images/diffuser.webp",
    "/images/candles.webp",
    "/images/difset.webp",
  ],

  sizes: [
    {
      name: "125ml",
      price: 8000,
    },
    {
      name: "250ml",
      price: 15000,
    },
    {
      name: "500ml",
      price: 25000,
    },
  ],
};

export default function ProductDescription() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = selectedSize.price * quantity;

  return (
    <>
      <SecondHeader />

      <main className={styles.productPage}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>

          <span>/</span>

          <Link href="/boutique-shop">Shop</Link>

          <span>/</span>

          <span>{product.name}</span>
        </div>

        {/* Product Section */}
        <section className={styles.productContainer}>
          {/* LEFT - Product Images */}
          <div className={styles.gallery}>
            {/* Main Image */}
            <div className={styles.mainImage}>
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Image Thumbnails */}
            <div className={styles.thumbnails}>
              {product.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={
                    selectedImage === index
                      ? styles.activeThumbnail
                      : styles.thumbnail
                  }
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT - Product Information */}
          <div className={styles.productInfo}>
            <p className={styles.collection}>OHR COLLECTION</p>

            <h1>{product.name}</h1>

            <p className={styles.price}>₦{totalPrice.toLocaleString()}</p>

            <p className={styles.description}>{product.description}</p>

            {/* Size Selection */}
            <div className={styles.option}>
              <h3>Size</h3>

              <div className={styles.sizeOptions}>
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    type="button"
                    className={
                      selectedSize.name === size.name
                        ? styles.selectedSize
                        : styles.sizeButton
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className={styles.option}>
              <h3>Quantity</h3>

              <div className={styles.quantityBox}>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add To Cart */}
            <button type="button" className={styles.addToCart}>
              Add to Cart
            </button>

            {/* Product Details */}
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <h3>Product Details</h3>

                <p>
                  Our signature scented candle is carefully crafted to add
                  warmth, elegance and a beautiful fragrance to your space.
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>Scent Profile</h3>

                <p>
                  A sophisticated fragrance designed to create a relaxing and
                  luxurious atmosphere.
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>Perfect For</h3>

                <p>
                  Self-care, relaxation, home fragrance, gifting and special
                  occasions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
