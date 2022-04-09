import styles from "../styles/home.module.css";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

// components imports
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skill from "../components/skill/Skill";
import Qualification from "../components/qualification/Qualification";

// skill data import
import { SKILLS } from "../source";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.videoWrapper}>
        <video autoPlay loop muted className={styles.heroBGVideo}>
          <source src="/assets/bg-videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.heroContainer}>
        <Hero />
        <span
          className={styles.scrollDownText}
          onClick={() => window.scrollTo(0, 750)}
        >
          <KeyboardDoubleArrowDown fontSize="large" /> Scroll Down
        </span>
      </div>
      <About />
      <div className={styles.skillsContainer} id="skills">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <span className={styles.title}>Skills</span>
            <span className={styles.desc}>My Technical Skills</span>
          </div>
          {SKILLS.map((s) => (
            <Skill key={s.id} skill={s} />
          ))}
        </div>
      </div>
      <div className={styles.qualificationContainer} id="qualifications">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <span className={styles.title}>Qualifications</span>
            <span className={styles.desc}>
              My Educational Qualification &amp; Work Experience
            </span>
          </div>
          <Qualification />
        </div>
      </div>
    </div>
  );
}
