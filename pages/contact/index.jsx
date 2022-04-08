import styles from "./contact.module.css";

// components imports
import Navbar from "../../components/navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className={styles.contact}></div>
    </>
  );
}
