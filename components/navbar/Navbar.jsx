import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { Menu, Close } from "@mui/icons-material";

export default function Navbar() {
  const router = useRouter();
  const navToggle = useRef();

  // dynamic navbar style
  const [isMobile, setIsMobile] = useState(false);
  const [iconColor, setIconColor] = useState("#fff");

  const handleWindowSizeChange = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const navbar = useRef();
  const primaryNav = useRef();
  const logo = useRef();

  const styleNavbar = () => {
    setIconColor("#000");
    navbar.current.style.backgroundColor = "white";
    navbar.current.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    primaryNav.current.style.backgroundColor = "#000000bf";
    primaryNav.current.style.backdropFilter = "blur(1rem)";
    logo.current.style.color = "#000";
  };

  const resetNavbarStyle = () => {
    setIconColor("#fff");
    logo.current.style.color = "#fff";
    navbar.current.style = "inherit";
    primaryNav.current.style = "inherit";
    if (isMobile) {
      primaryNav.current.style.backgroundColor = "#000000bf";
    }
  };

  const setNavbarStyle = (y) => {
    if (y !== 0) {
      styleNavbar();
    } else {
      resetNavbarStyle();
    }
  };

  useEffect(() => {
    if (!isMobile) return;
    primaryNav.current.style.backgroundColor = "#000000bf";
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("scroll", () => setNavbarStyle(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () =>
        setNavbarStyle(window.scrollY)
      );
    };
  }, []);

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
    <div className={styles.navbar} ref={navbar}>
      <div className={styles.logo} ref={logo}>
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
        {!expanded ? (
          <Menu fontSize="large" htmlColor={iconColor} />
        ) : (
          <Close fontSize="large" htmlColor={iconColor} />
        )}
        <span className={styles.srOnly}>Menu</span>
      </button>
      <nav>
        <ul
          className={`${styles.primaryNavigation} ${styles.listReset}`}
          data-visible="false"
          ref={primaryNav}
        >
          <li
            className={`${styles.item} ${
              router.asPath === "/" && styles.active
            }`}
            onClick={handleToggle}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${styles.item} ${
              router.asPath === "/#about" && styles.active
            }`}
            onClick={handleToggle}
          >
            <Link href="#about">About</Link>
          </li>
          <li
            className={`${styles.item} ${
              router.asPath === "/#skills" && styles.active
            }`}
            onClick={handleToggle}
          >
            <Link href="#skills">Skills</Link>
          </li>
          <li
            className={`${styles.item} ${
              router.asPath === "/#qualifications" && styles.active
            }`}
            onClick={handleToggle}
          >
            <Link href="#qualifications">Qualifications</Link>
          </li>
          <li
            className={`${styles.item} ${
              router.asPath === "/#projects" && styles.active
            }`}
            onClick={handleToggle}
          >
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
