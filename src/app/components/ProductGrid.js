import ProductCard from "./ProductCard";
import styles from "../styles/ProductGrid.module.css";

const products = [
  {
    title: "Ohr Candle",
    collection: "Private Reserve",
    price: "$85",
    image: "/images/candles.webp",
    rating: 4.5,
    reviews: 24,
  },
  {
    title: "Noir Heritage",
    collection: "Heritage Series",
    price: "$125",
    image: "/images/diffuser.webp",
    rating: 5,
    reviews: 108,
  },
  {
    title: "Oud Botanique",
    collection: "Botanical Edit",
    price: "$145",
    image: "/images/perf.webp",
    rating: 4,
    reviews: 52,
  },
  {
    title: "Atelier Diffuser",
    collection: "Maison Collection",
    price: "$110",
    image: "/images/difset.webp",
    rating: 4,
    reviews: 12,
  },
  {
    title: "Solar Jasmine",
    collection: "Seasonal Edit",
    price: "$160",
    image: "/images/perf.webp",
    rating: 5,
    reviews: 89,
  },
  {
    title: "Cedar & Suede",
    collection: "Private Reserve",
    price: "$195",
    image: "/images/diffuser.webp",
    rating: 4.5,
    reviews: 37,
  },
];

export default function ProductGrid() {
  return (
    <section className={styles.grid}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </section>
  );
}
