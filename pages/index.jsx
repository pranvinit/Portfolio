import styles from "../styles/home.module.css";

// components imports
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.homeContainer}></div>
    </div>
  );
}
