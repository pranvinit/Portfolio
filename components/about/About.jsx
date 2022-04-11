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
              src="/assets/about.jpg"
              alt="about"
              className={styles.aboutImg}
            />
          </div>
          <div className={styles.bottomRight}>
            <span className={styles.introduction}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              ullam ipsam! Nobis nisi rerum saepe illo quidem cupiditate
              possimus neque provident, corr
            </span>
          </div>
          <button className={styles.resumeBtn}>
            Resume <Article />
          </button>
        </div>
      </div>
    </div>
  );
}
