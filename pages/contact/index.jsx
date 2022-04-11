import Form from "../../components/form/Form";
import styles from "./contact.module.css";

// animation imports
import { motion } from "framer-motion";
import { DROPDOWN } from "../../variants/Variants";

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.fallbackBG}></div>
        <div className={styles.videoWrapper}>
          <video autoPlay loop muted className={styles.contactBGVideo}>
            <source src="/assets/bg-videos/contact-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.div variants={DROPDOWN} initial="initial" animate="animate">
          <Form />
        </motion.div>
      </div>
    </>
  );
}
