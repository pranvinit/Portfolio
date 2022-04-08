import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { Menu, Close } from "@mui/icons-material";

export default function Navbar() {
  const router = useRouter();
  const primaryNav = useRef();
  const navToggle = useRef();

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    const visibility = primaryNav.current.getAttribute("data-visible");
    if (visibility === "false") {
      primaryNav.current.setAttribute("data-visible", true);
      navToggle.current.setAttribute("aria-expanded", true);
      setExpanded(true);
    } else if (visibility === "true") {
      primaryNav.current.setAttribute("data-visible", false);
      navToggle.current.setAttribute("aria-expanded", false);
      setExpanded(false);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <span>Pranav Yeole</span>
        </Link>
      </div>
      <button
        className={styles.mobileNavToggle}
        aria-controls="primary-navigation"
        aria-expanded="false"
        ref={navToggle}
        onClick={handleToggle}
      >
        {!expanded ? <Menu fontSize="large" /> : <Close fontSize="large" />}
        <span className={styles.srOnly}>Menu</span>
      </button>
      <nav>
        <ul
          className={`${styles.primaryNavigation} ${styles.listReset}`}
          data-visible="false"
          ref={primaryNav}
        >
          <li
            className={`${styles.navLi} ${
              router.asPath === "/" && styles.active
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${styles.navLi} ${
              router.asPath === "/#about" && styles.active
            }`}
          >
            <Link href="#about">About</Link>
          </li>
          <li
            className={`${styles.navLi} ${
              router.asPath === "/#skills" && styles.active
            }`}
          >
            <Link href="#skills">Skills</Link>
          </li>
          <li
            className={`${styles.navLi} ${
              router.asPath === "/#qualifications" && styles.active
            }`}
          >
            <Link href="#qualifications">Qualifications</Link>
          </li>
          <li
            className={`${styles.navLi} ${
              router.asPath === "/#projects" && styles.active
            }`}
          >
            <Link href="#projects">Projects</Link>
          </li>
          <li
            className={`${styles.navLi} ${
              router.asPath === "/contact" && styles.active
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
