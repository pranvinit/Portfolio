import styles from "../styles/home.module.css";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

const Project = require("../server/models/Project");
const connectDB = require("../server/db/connect");

// components imports
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skill from "../components/skill/Skill";
import Qualification from "../components/qualification/Qualification";
import Carousel from "../components/carousel/Carousel";

// skill data import
import { SKILLS } from "../source";

export default function Home({ projects, nbHits }) {
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
          onClick={() => window.scrollTo(0, 650)}
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
      <div className={styles.projectsContainer}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <span className={styles.title}>Projects</span>
            <span className={styles.desc}>My recent projects</span>
            <Carousel data={projects} nbHits={nbHits} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const getProjects = async () => {
    try {
      await connectDB();
      const data = await Project.find({}).sort("-createdAt");
      const projects = JSON.stringify(data);
      return projects;
    } catch (e) {
      console.log(e);
    }
  };

  const projects = await getProjects();

  return {
    props: {
      projects,
      nbHits: projects.length,
    },
    revalidate: 60 * 30,
  };
}
