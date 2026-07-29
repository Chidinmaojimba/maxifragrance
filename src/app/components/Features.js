// "use client";
import { FaShippingFast, FaMedal, FaLock, FaHeadset } from "react-icons/fa";

import styles from "../styles/Features.module.css";

export default function Features() {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Free Delivery",
      text: "Fast and secure delivery across Nigeria.",
    },
    {
      icon: <FaMedal />,
      title: "Premium Quality",
      text: "Luxury fragrances sourced from trusted brands.",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      text: "Safe payment using cards or bank transfer.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      text: "We're always available to help you.",
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
