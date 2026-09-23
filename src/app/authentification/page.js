"use client";

import { useState } from "react";
import Link from "next/link";

import styles from "../styles/authentification.module.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login submitted");
  };

  return (
    <main className={styles.loginPage}>
      {/* Image Section */}
      <section className={styles.imageSection}>
        <div className={styles.imageOverlay}></div>

        {/* <img
          src="/images/auth/savoir-perfume.jpg"
          alt="Maxi Fragrance Savoir perfume"
          className={styles.backgroundImage}
        /> */}

        <img
          src="/images/candles.webp"
          alt="Maxi Fragrance Savoir perfume"
          className={styles.backgroundImage}
        />

        <div className={styles.imageBranding}>
          <h2>Savoir</h2>

          <p>
            The quintessence of modern heritage. A fragrance that whispers
            elegance and commands attention.
          </p>
        </div>
      </section>

      {/* Login Section */}
      <section className={styles.formSection}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">Maxi Fragrance</Link>
        </div>

        <div className={styles.formWrapper}>
          {/* Header */}
          <header className={styles.formHeader}>
            <h1>Welcome Back</h1>

            <p>Access your olfactory journey and personal collection.</p>
          </header>

          {/* Login Form */}
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            {/* Email */}
            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
              />

              <label htmlFor="email">Email Address</label>
            </div>

            {/* Password */}
            <div className={styles.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder=" "
                required
              />

              <label htmlFor="password">Password</label>

              <button
                type="button"
                className={styles.visibilityButton}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Remember and Forgot Password */}
            <div className={styles.formOptions}>
              <label className={styles.rememberMe}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />

                <span>Remember me</span>
              </label>

              <Link href="/forgot-password">Forgot Password?</Link>
            </div>

            {/* Submit */}
            <button type="submit" className={styles.signInButton}>
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className={styles.divider}>
            <span></span>

            <p>Or continue with</p>

            <span></span>
          </div>

          {/* Social Login */}
          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialButton}>
              <span>G</span>
              Google
            </button>

            <button type="button" className={styles.socialButton}>
              <span>●</span>
              Apple
            </button>
          </div>

          {/* Create Account */}
          <div className={styles.createAccount}>
            <p>
              Don't have an account?{" "}
              <Link href="/register">Create an Account</Link>
            </p>
          </div>
        </div>

        {/* Legal Links */}
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>

          <span>/</span>

          <Link href="/terms">Terms of Service</Link>

          <span>/</span>

          <Link href="/contact">Contact</Link>
        </div>
      </section>
    </main>
  );
}
