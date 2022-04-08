import styles from "../styles/home.module.css";

// components imports
import Navbar from "../components/navbar/Navbar";
import Bottombar from "../components/bottombar/Bottombar";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.homeContainer}></div>
      <Bottombar />
    </div>
  );
}
