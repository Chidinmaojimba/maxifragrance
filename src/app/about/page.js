"use client";

import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <Navbar />

      <main className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>THE STORY OF MAXI SAVOIR</p>

            <h1>
              The Art of
              <br />
              Fragrance
            </h1>

            <p>
              Discover the story, inspiration and craftsmanship behind Maxi
              Savoir.
            </p>

            <a href="#our-story" className={styles.primaryButton}>
              Discover Our Story
            </a>
          </div>
        </section>

        {/* Our Story */}
        <section id="our-story" className={styles.storySection}>
          <div className={styles.storyImage}>
            <img
              src="/images/candles.webp"
              alt="Maxi Savoir fragrance collection"
            />
          </div>

          <div className={styles.storyContent}>
            <p className={styles.eyebrow}>OUR STORY</p>

            <h2>
              A Fragrance
              <br />
              With Meaning
            </h2>

            <p>
              At Ohr, we believe that fragrance is more than a scent. It is an
              experience, a memory and an expression of individuality.
            </p>

            <p>
              Our brand was created to bring beautiful fragrance experiences
              into everyday life through thoughtfully selected and carefully
              crafted products.
            </p>

            <p>
              From personal fragrances to home fragrance products, we aim to
              help you create moments that feel special.
            </p>
          </div>
        </section>

        {/* Brand Philosophy */}
        <section className={styles.philosophySection}>
          <div className={styles.philosophyContent}>
            <p className={styles.eyebrow}>OUR PHILOSOPHY</p>

            <h2>
              Scent Is a
              <br />
              Way of Living
            </h2>

            <p>
              We combine elegance, creativity and attention to detail to create
              fragrance experiences that fit different lifestyles and spaces.
            </p>
          </div>

          <div className={styles.philosophyCards}>
            <div className={styles.philosophyCard}>
              <span>01</span>
              <h3>Quality</h3>
              <p>
                We value thoughtful product selection and attention to detail.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <span>02</span>
              <h3>Elegance</h3>
              <p>
                We create products that complement your personal style and
                surroundings.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <span>03</span>
              <h3>Experience</h3>
              <p>
                We want every scent to create a memorable and meaningful
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className={styles.missionSection}>
          <div className={styles.missionCard}>
            <p className={styles.eyebrow}>OUR MISSION</p>

            <h2>Making Every Moment More Beautiful</h2>

            <p>
              To provide fragrance products that inspire comfort, confidence,
              relaxation and self-expression.
            </p>
          </div>

          <div className={styles.missionCard}>
            <p className={styles.eyebrow}>OUR VISION</p>

            <h2>Building a Fragrance Legacy</h2>

            <p>
              To become a trusted fragrance brand known for creativity, quality
              and exceptional scent experiences.
            </p>
          </div>
        </section>

        {/* Call To Action */}
        <section className={styles.ctaSection}>
          <p className={styles.eyebrow}>EXPLORE MAXI SAVOIR</p>

          <h2>
            Find a Scent
            <br />
            That Feels Like You
          </h2>

          <p>
            Explore our collection and discover your next signature fragrance.
          </p>

          <Link href="/boutique-shop" className={styles.primaryButton}>
            Explore Collection
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
