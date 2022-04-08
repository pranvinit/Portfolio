import styles from "./navbar.module.css";
import Link from "next/link";
import { useRef } from "react";

export default function Navbar() {
  const primaryNav = useRef();
  const navToggle = useRef();

  const handleToggle = () => {
    const visibility = primaryNav.current.getAttribute("data-visible");
    if (visibility === "false") {
      primaryNav.current.setAttribute("data-visible", true);
      navToggle.current.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
      primaryNav.current.setAttribute("data-visible", false);
      navToggle.current.setAttribute("aria-expanded", false);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <span>Pranav Yeole</span>
      </div>
      <button
        className={styles.mobileNavToggle}
        aria-controls="primary-navigation"
        aria-expanded="false"
        ref={navToggle}
        onClick={handleToggle}
      >
        <span className={styles.srOnly}>Menu</span>
      </button>
      <nav>
        <ul
          className={`${styles.primaryNavigation} ${styles.listReset}`}
          data-visible="false"
          ref={primaryNav}
        >
          <li className={styles.navLi}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navLi}>
            <Link href="#about">About</Link>
          </li>
          <li className={styles.navLi}>
            <Link href="#skills">Skills</Link>
          </li>
          <li className={styles.navLi}>
            <Link href="#qualifications">Qualifications</Link>
          </li>
          <li className={styles.navLi}>
            <Link href="#Projects">Projects</Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
