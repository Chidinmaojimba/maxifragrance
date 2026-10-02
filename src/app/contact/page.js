"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting Maxi Fragrance!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <main className={styles["contact-page"]}>
        {/* =========================
            HERO SECTION
        ========================= */}
        <section className={styles["contact-hero"]}>
          <div className={styles["contact-hero-content"]}>
            <span className={styles["contact-small-title"]}>GET IN TOUCH</span>

            <h1>
              Let&apos;s Talk <span>Fragrance.</span>
            </h1>

            <p>
              Have a question about our fragrances, an order, or simply need
              some fragrance advice? We&apos;re here to help.
            </p>
          </div>
        </section>

        <section className={styles["contact-section"]}>
          <div className={styles["contact-container"]}>
            {/* CONTACT INFORMATION */}
            <div className={styles["contact-info"]}>
              <span className={styles["section-label"]}>CONTACT US</span>

              <h2>We&apos;d love to hear from you.</h2>

              <p className={styles["contact-description"]}>
                Whether you&apos;re looking for your next signature scent,
                checking on an order, or have a question about Maxi Fragrance,
                feel free to reach out.
              </p>

              <div className={styles["contact-details"]}>
                <div className={styles["contact-detail"]}>
                  <div className={styles["contact-icon"]}>✉</div>

                  <div>
                    <h3>Email</h3>
                    <p>maxihub888@gmail.com</p>
                  </div>
                </div>

                <div className={styles["contact-detail"]}>
                  <div className={styles["contact-icon"]}>☎</div>

                  <div>
                    <h3>Phone</h3>
                    <p>+234 908104805</p>
                  </div>
                </div>

                <div className={styles["contact-detail"]}>
                  <div className={styles["contact-icon"]}>⌖</div>

                  <div>
                    <h3>Location</h3>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>

                <div className={styles["contact-detail"]}>
                  <div className={styles["contact-icon"]}>◷</div>

                  <div>
                    <h3>Opening Hours</h3>
                    <p>Monday – Saturday</p>
                    <p>9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className={styles["contact-socials"]}>
                <h3>Follow Maxi Fragrance</h3>

                <div className={styles["social-links"]}>
                  <a href="#" aria-label="Instagram">
                    IG
                  </a>

                  <a href="#" aria-label="TikTok">
                    TT
                  </a>

                  <a href="#" aria-label="Facebook">
                    FB
                  </a>

                  <a href="#" aria-label="WhatsApp">
                    WA
                  </a>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className={styles["contact-form-wrapper"]}>
              <div className={styles["form-heading"]}>
                <span>WRITE TO US</span>

                <h2>Send us a message</h2>
              </div>

              <form onSubmit={handleSubmit} className={styles["contact-form"]}>
                {/* NAME + EMAIL */}
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="name">Full Name</label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles["form-group"]}>
                    <label htmlFor="email">Email Address</label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* PHONE + SUBJECT */}
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="phone">Phone Number</label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles["form-group"]}>
                    <label htmlFor="subject">Subject</label>

                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="fragrance">Fragrance Inquiry</option>
                      <option value="delivery">Delivery</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className={styles["form-group"]}>
                  <label htmlFor="message">Your Message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* SUBMIT */}
                <button type="submit" className={styles["contact-submit"]}>
                  Send Message
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className={styles["contact-cta"]}>
          <div className={styles["contact-cta-content"]}>
            <span>NEED HELP?</span>

            <h2>Looking for your perfect scent?</h2>

            <p>
              Our team can help you discover a fragrance that matches your
              personality and style.
            </p>

            <Link href="/boutique" className={styles["cta-button"]}>
              Explore Our Collection
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
