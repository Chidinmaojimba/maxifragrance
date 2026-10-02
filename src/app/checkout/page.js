"use client";

import { useState } from "react";
import styles from "../styles/checkout.module.css";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
  });

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    saveCard: false,
  });

  const handleShippingChange = (e) => {
    const { name, value } = e.target;

    setShipping((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value, type, checked } = e.target;

    setPayment((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const goToStep = (number) => {
    setStep(number);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.checkoutPage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.logo}>OHR</h1>

          <div className={styles.secureCheckout}>
            <span className={styles.lockIcon}>🔒</span>
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.checkoutGrid}>
          {/* LEFT SIDE */}
          <div className={styles.leftColumn}>
            {/* Progress Indicator */}
            <nav className={styles.progress}>
              <StepIndicator
                number={1}
                title="Shipping"
                active={step >= 1}
                current={step === 1}
              />

              <div className={styles.progressLine}></div>

              <StepIndicator
                number={2}
                title="Payment"
                active={step >= 2}
                current={step === 2}
              />

              <div className={styles.progressLine}></div>

              <StepIndicator
                number={3}
                title="Review"
                active={step >= 3}
                current={step === 3}
              />
            </nav>

            {/* SHIPPING */}
            {step === 1 && (
              <section className={styles.stepSection}>
                <h2 className={styles.sectionTitle}>Shipping Information</h2>

                <form className={styles.form}>
                  <div className={styles.twoColumns}>
                    <InputField
                      label="First Name"
                      name="firstName"
                      placeholder="Jean"
                      value={shipping.firstName}
                      onChange={handleShippingChange}
                    />

                    <InputField
                      label="Last Name"
                      name="lastName"
                      placeholder="Dupont"
                      value={shipping.lastName}
                      onChange={handleShippingChange}
                    />
                  </div>

                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="jean.dupont@fragrance.com"
                    value={shipping.email}
                    onChange={handleShippingChange}
                  />

                  <InputField
                    label="Street Address"
                    name="address"
                    placeholder="22 Place Vendôme"
                    value={shipping.address}
                    onChange={handleShippingChange}
                  />

                  <div className={styles.threeColumns}>
                    <InputField
                      label="City"
                      name="city"
                      placeholder="Paris"
                      value={shipping.city}
                      onChange={handleShippingChange}
                    />

                    <InputField
                      label="Postal Code"
                      name="postalCode"
                      placeholder="75001"
                      value={shipping.postalCode}
                      onChange={handleShippingChange}
                    />

                    <div className={styles.inputGroup}>
                      <label>Country</label>

                      <select
                        name="country"
                        value={shipping.country}
                        onChange={handleShippingChange}
                      >
                        <option>France</option>
                        <option>Italy</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Nigeria</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.buttonWrapper}>
                    <button
                      type="button"
                      className={styles.primaryButton}
                      onClick={() => goToStep(2)}
                    >
                      CONTINUE TO PAYMENT
                    </button>
                  </div>
                </form>
              </section>
            )}

            {/* PAYMENT */}
            {step === 2 && (
              <section className={styles.stepSection}>
                <h2 className={styles.sectionTitle}>Payment Method</h2>

                <div className={styles.paymentContent}>
                  <div className={styles.expressPayment}>
                    <button type="button">
                      <span></span>
                      Apple Pay
                    </button>

                    <button type="button">
                      <span>💳</span>
                      PayPal
                    </button>
                  </div>

                  <div className={styles.divider}>
                    <span>OR PAY WITH CARD</span>
                  </div>

                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <label>Card Number</label>

                      <div className={styles.cardInput}>
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="0000 0000 0000 0000"
                          value={payment.cardNumber}
                          onChange={handlePaymentChange}
                        />

                        <span>💳</span>
                      </div>
                    </div>

                    <div className={styles.twoColumns}>
                      <InputField
                        label="Expiry Date"
                        name="expiry"
                        placeholder="MM / YY"
                        value={payment.expiry}
                        onChange={handlePaymentChange}
                      />

                      <InputField
                        label="CVV"
                        name="cvv"
                        placeholder="123"
                        value={payment.cvv}
                        onChange={handlePaymentChange}
                      />
                    </div>

                    <label className={styles.checkboxContainer}>
                      <input
                        type="checkbox"
                        name="saveCard"
                        checked={payment.saveCard}
                        onChange={handlePaymentChange}
                      />

                      <span>
                        Securely save card details for future purchases
                      </span>
                    </label>

                    <div className={styles.paymentButtons}>
                      <button
                        type="button"
                        className={styles.backButton}
                        onClick={() => goToStep(1)}
                      >
                        BACK
                      </button>

                      <button
                        type="button"
                        className={styles.primaryButton}
                        onClick={() => goToStep(3)}
                      >
                        REVIEW ORDER
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            )}

            {/* REVIEW */}
            {step === 3 && (
              <section className={styles.stepSection}>
                <h2 className={styles.sectionTitle}>Review Order</h2>

                <div className={styles.reviewCard}>
                  <div className={styles.reviewRow}>
                    <div>
                      <p className={styles.reviewLabel}>Shipping to</p>

                      <p>
                        {shipping.firstName || "Jean"}{" "}
                        {shipping.lastName || "Dupont"}
                      </p>

                      <p className={styles.muted}>
                        {shipping.address || "22 Place Vendôme"},{" "}
                        {shipping.city || "Paris"},{" "}
                        {shipping.postalCode || "75001"},{" "}
                        {shipping.country || "France"}
                      </p>
                    </div>

                    <button type="button" onClick={() => goToStep(1)}>
                      Edit
                    </button>
                  </div>

                  <hr />

                  <div className={styles.reviewRow}>
                    <div>
                      <p className={styles.reviewLabel}>Payment Method</p>

                      <p>
                        Visa ending in{" "}
                        {payment.cardNumber
                          ? payment.cardNumber.slice(-4)
                          : "4242"}
                      </p>
                    </div>

                    <button type="button" onClick={() => goToStep(2)}>
                      Edit
                    </button>
                  </div>
                </div>

                <div className={styles.placeOrder}>
                  <p>
                    By clicking &quot;Place Order&quot;, you agree to our Terms
                    of Service and Privacy Policy.
                  </p>

                  <button type="button">PLACE ORDER — €385.00</button>
                </div>
              </section>
            )}
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <aside className={styles.summary}>
            <div className={styles.summaryCard}>
              <h3>Order Summary</h3>

              <div className={styles.cartItems}>
                <CartItem
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDRTCzZSa8dhn3ZBci8ggSNSVlOxav2sKzC-aGyZmu7FJRxc0cAVCGze5K0tsNg1HU_oUSIszHmne_v_BvyurOmZML1aaab5aDa3uoG03YU8fwS5ZciFACmjZqtaL7E1sNmgAHWnTSsCB-epvjeYtXY6nbG1VMvSO7OOjmrlRaN5Nqq91H0cQdfWw-8stUujrIGn4415XZYHRlVcj7U64Zt-7N2hhYQwwluqPmUEqWW72ILJmQIXGyS-q9nzYvNpWJluE5uEx8bxSUf"
                  name="Nuit Étoilée"
                  description="Eau de Parfum — 100ml"
                  price="€210.00"
                />

                <CartItem
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuBpNVuDj6kS1w2XrPH0NuRP0mctyPkbcgWvdLhUGzmjTwYxnG497lX3uMeMZFlDny9ymvAYDSUxTy61GVM1LLcfJtSOSPTGr4lQETC3P9TXmcg9pdm7ouyGzVB3qK2JdSqj3c0a2XW6tlIweW6ufp2rg_dHsHc3r3UmZUq4nX8KD84la46qjZOCVoYmfmFszoxMyRKPy93hgPl9v4ez22OfqEa_RWCEQmqHZUC5va48uOhhpImeAzYHLrB6MGS_RdzXnlNNbBzWemQ0"
                  name="Bois de Velours"
                  description="Extrait de Parfum — 50ml"
                  price="€175.00"
                />
              </div>

              <hr />

              <div className={styles.totals}>
                <div>
                  <span>Subtotal</span>
                  <span>€385.00</span>
                </div>

                <div>
                  <span>Shipping</span>
                  <span className={styles.complimentary}>Complimentary</span>
                </div>

                <div>
                  <span>Taxes (calculated)</span>
                  <span>€0.00</span>
                </div>

                <div className={styles.total}>
                  <strong>Total</strong>
                  <strong>€385.00</strong>
                </div>
              </div>

              <div className={styles.trustBadges}>
                <div>
                  <span>✓</span>
                  <p>Authenticity Guaranteed</p>
                </div>

                <div>
                  <span>🛡</span>
                  <p>Encrypted Payment</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className={styles.footer}>
        © 2024 Ohr. Secure Checkout Experience.
      </footer>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StepIndicator({ number, title, active, current }) {
  return (
    <div
      className={`${styles.stepIndicator} ${
        active ? styles.activeStep : ""
      } ${current ? styles.currentStep : ""}`}
    >
      <span className={styles.stepNumber}>{number}</span>

      <span className={styles.stepTitle}>{title}</span>
    </div>
  );
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function CartItem({ image, name, description, price }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.productImage}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.productDetails}>
        <div>
          <h4>{name}</h4>

          <p>{description}</p>
        </div>

        <div className={styles.productBottom}>
          <span>Qty: 1</span>
          <strong>{price}</strong>
        </div>
      </div>
    </div>
  );
}
