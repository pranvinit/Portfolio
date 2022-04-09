import styles from "./carousel.module.css";
import { useState } from "react";

// components imports
import Project from "../project/Project";

export default function Carousel({ data }) {
  const projects = JSON.parse(data);
  const [index, setIndex] = useState(0);

  return (
    <div id="projects" className={styles.carousel}>
      <div className={styles.projectContainer}>
        <Project project={projects[index]} />
      </div>
    </div>
  );
}
