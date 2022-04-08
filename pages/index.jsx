import styles from "../styles/home.module.css";

// components imports
import Hero from "../components/hero/Hero";
import About from "../components/about/About";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <About />
    </div>
  );
}
