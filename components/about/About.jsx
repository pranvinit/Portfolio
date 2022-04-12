import styles from "./about.module.css";
import { Article } from "@mui/icons-material";

export default function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <span className={styles.title}>About</span>
          <span className={styles.desc}>My introduction</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <img
              src="/assets/avatar.jpg"
              alt="about"
              className={styles.aboutImg}
            />
          </div>
          <div className={styles.bottomRight}>
            <span className={styles.introduction}>
              Hey there 👋 , I&apos;m Pranav. I develop modern and efficient Web
              and Mobile applications. I ❤️ working with JavaScript and Python
              frameworks like React, React Native, Django. I have built and
              hosted several Full Stack projects using these technologies.
            </span>
          </div>
          <a
            className={styles.resumeLink}
            href="/resume/pranav-yeole.pdf"
            download="Pranav-Resume"
          >
            <button className={styles.resumeBtn}>
              Resume <Article />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
