import Form from "../../components/form/Form";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.videoWrapper}>
          <video autoPlay loop muted className={styles.contactBGVideo}>
            <source src="/assets/bg-videos/contact-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <Form />
      </div>
    </>
  );
}
