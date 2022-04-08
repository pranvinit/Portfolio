import styles from "./bottombar.module.css";
import { Instagram, Twitter, LinkedIn } from "@mui/icons-material";

export default function Bottombar() {
  return (
    <div className={styles.bottombar}>
      <div className={styles.bottombarCenter}>
        <span className={styles.bottombarText}>
          &#169; 2022 <strong>Pranav Yeole</strong>
        </span>
      </div>
      <div className={styles.bottombarRight}>
        <ul className={styles.socialList}>
          <li className={styles.social}>
            <a href="https://www.instagram.com/_pranv_/" target="_blank">
              <Instagram />
            </a>
          </li>
          <li className={styles.social}>
            <a href="https://twitter.com/pranv21" target="_blank">
              <Twitter />
            </a>
          </li>
          <li className={styles.social}>
            <a
              href="https://www.linkedin.com/in/pranav-yeole-3aab14215/"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
