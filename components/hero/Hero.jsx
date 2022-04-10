import styles from "./hero.module.css";
import {
  Instagram,
  Twitter,
  LinkedIn,
  GitHub,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";

import { Send } from "@mui/icons-material";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <span className={styles.title}>Hi, &apos; Pranav Yeole</span>
          <span className={styles.tagline}>
            Full Stack Developer | Web &amp; Mobile
          </span>
          <span className={styles.desc}>
            I aspire to be an excellent developer. I work with JavaScript and
            Python to build secure and scalable full stack Web and Mobile
            applications.
          </span>
        </div>
        <div className={styles.bottom}>
          <Link href="/contact">
            <button className={styles.contactBtn}>
              Contact <Send />
            </button>
          </Link>
          <ul className={styles.contactList}>
            <li className={styles.contact}>
              <a
                href="https://www.instagram.com/_pranv_/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram fontSize="large" />
              </a>
            </li>
            <li className={styles.contact}>
              <a
                href="https://twitter.com/pranv21"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter fontSize="large" />
              </a>
            </li>
            <li className={styles.contact}>
              <a
                href="https://www.linkedin.com/in/pranav-yeole-3aab14215/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn fontSize="large" />
              </a>
            </li>
            <li className={styles.contact}>
              <a
                href="https://www.github.com/pranvinit/"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub fontSize="large" />
              </a>
            </li>
            <li className={styles.contact}>
              <a
                href="https://www.youtube.com/channel/UC-n2pLjaBS7s72Fgtwsun7Q"
                target="_blank"
                rel="noreferrer"
              >
                <YouTube fontSize="large" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
