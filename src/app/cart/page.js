"use client";

import { useState } from "react";
import Image from "next/image";
import SecondHeader from "../components/SecondHeader";

import Footer from "../components/Footer";
import styles from "../styles/cart.module.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      collection: "Ohr Collection",
      name: "Ohr Candle, 250g",
      notes: "Notes of Bergamot, Sandalwood, and Leather",
      price: 85,
      quantity: 1,
      image: "/images/candles.webp",
    },
    {
      id: 2,
      collection: "Heritage Collection",
      name: "Heritage Room Spray",
      notes: "Notes of Iris, White Musk, and Cedar",
      price: 62,
      quantity: 1,
      image: "/images/perf.webp",
    },
  ]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.cartPage}>
      <SecondHeader />

      <main className={styles.cartMain}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <span>Home</span>
          <span>›</span>
          <strong>Your Shopping Bag</strong>
        </div>

        {/* Page Heading */}
        <h1 className={styles.cartTitle}>Your Shopping Bag</h1>

        <div className={styles.cartLayout}>
          {/* Cart Items */}
          <section className={styles.cartItems}>
            {cartItems.length === 0 ? (
              <h2>Your shopping bag is empty.</h2>
            ) : (
              cartItems.map((item) => (
                <div className={styles.cartItem} key={item.id}>
                  {/* Product Image */}
                  <div className={styles.productImageContainer}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={190}
                      height={245}
                      className={styles.productImage}
                    />
                  </div>

                  {/* Product Information */}
                  <div className={styles.productInformation}>
                    <div className={styles.productTop}>
                      <div>
                        <p className={styles.collectionName}>
                          {item.collection}
                        </p>

                        <h2>{item.name}</h2>

                        <p className={styles.productNotes}>{item.notes}</p>
                      </div>

                      <button
                        className={styles.removeButton}
                        onClick={() => removeItem(item.id)}
                      >
                        ×
                      </button>
                    </div>

                    {/* Quantity and Price */}
                    <div className={styles.productBottom}>
                      <div className={styles.quantityControl}>
                        <button onClick={() => decreaseQuantity(item.id)}>
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>

                      <p className={styles.productPrice}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>

          {/* Order Summary */}
          <aside className={styles.orderSummary}>
            <h2>Order Summary</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Calculated at next step</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Tax</span>
              <span>$0.00</span>
            </div>

            <div className={styles.summaryDivider}></div>

            <div className={styles.summaryTotal}>
              <span>Total</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>

            <p className={styles.shippingNote}>
              Complimentary shipping on selected orders.
            </p>
          </aside>
        </div>
      </main>

      {/* <footer></footer> */}
      <Footer />
    </div>
  );
}

export default Cart;
