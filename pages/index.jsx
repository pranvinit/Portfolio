import styles from "../styles/home.module.css";

// components imports
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skill from "../components/skill/Skill";

// skill data import
import { SKILLS } from "../source";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <About />
      <div className={styles.skillsContainer}>
        <div className={styles.skillsWrapper}>
          {SKILLS.map((s) => (
            <Skill key={s.id} skill={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
