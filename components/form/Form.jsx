import styles from "./form.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Mail, Delete } from "@mui/icons-material";
import autosize from "autosize";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function Form() {
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, isError] = useState(null);

  const nameInput = useRef();
  const emailInput = useRef();
  const subjectInput = useRef();
  const messageInput = useRef();

  useEffect(() => {
    autosize(messageInput.current);
  }, []);

  const handleReset = () => {
    nameInput.current.value = "";
    emailInput.current.value = "";
    subjectInput.current.value = "";
    messageInput.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const subject = subjectInput.current.value;
    const message = messageInput.current.value;

    setLoading(true);
    try {
      await axios.post("/api/contact", { name, email, subject, message });
      handleReset();
      setLoading(false);
      setShowAlert(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
      isError(e.response.message);
      setShowAlert(true);
    }
  };

  if (showAlert) {
    return (
      <div className={styles.alert}>
        <div className={styles.alertWrapper}>
          <span className={styles.message}>Success.</span>
          <img
            src="/assets/png/check.png"
            alt="check"
            className={styles.check}
          />
          <div className={styles.alertOptions}>
            <button
              className={styles.backBtn}
              onClick={() => setShowAlert(false)}
            >
              Go back
            </button>
            <Link href="/">
              <button className={styles.homeBtn}>Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.title}>Contact Me</div>
          <div className={styles.subtitle}>
            Want to connect? My inbox is always open!
          </div>
        </div>
        <form className={styles.bottom} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.contactInput}
            ref={nameInput}
            placeholder="Name"
            required
          />
          <input
            type="email"
            className={styles.contactInput}
            ref={emailInput}
            placeholder="Email"
            required
          />
          <input
            type="text"
            className={styles.contactInput}
            ref={subjectInput}
            placeholder="Subject"
          />
          <textarea
            type="text"
            ref={messageInput}
            placeholder="Message"
            required
            className={styles.contactTextArea}
          />
          <div className={styles.formOptions}>
            <button className={styles.cancelBtn} onClick={handleReset}>
              Cancel
              <Delete />
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {!loading ? (
                "Submit"
              ) : (
                <CircularProgress
                  className={styles.loadingProgress}
                  size={30}
                />
              )}
              {!loading && <Mail />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
