import styles from "./carousel.module.css";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

// components imports
import Project from "../project/Project";

export default function Carousel({ data }) {
  const projects = JSON.parse(data);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    const next = ++index % projects.length;
    setIndex(next);
  };

  const handlePrev = () => {
    if (index === 0) {
      return setIndex(--projects.length);
    }
    const prev = --index % projects.length;
    setIndex(prev);
  };

  return (
    <div id="projects" className={styles.carousel}>
      <div className={styles.container}>
        <Project project={projects[index]} key={index} />
      </div>
      <div className={styles.prevArrow}>
        <ArrowLeft
          className={styles.icon}
          fontSize="large"
          onClick={handlePrev}
        />
      </div>
      <div className={styles.nextArrow}>
        <ArrowRight
          className={styles.icon}
          fontSize="large"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
