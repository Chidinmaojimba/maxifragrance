// "use client";

import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Customer",
    review:
      "The fragrance lasts all day and the packaging is absolutely luxurious. Definitely buying again!",
  },
  {
    name: "David Michael",
    role: "Perfume Enthusiast",
    review:
      "Maxi Fragrance exceeded my expectations. The reed diffuser transformed my living room.",
  },
  {
    name: "Chidinma",
    role: "Loyal Customer",
    review:
      "Elegant scents, fast delivery, and amazing customer service. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Customers Say</h2>

      <div className={styles.grid}>
        {testimonials.map((item, index) => (
          <div className={styles.card} key={index}>
            <p>"{item.review}"</p>

            <h4>{item.name}</h4>

            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
