import styles from "./project.module.css";
import Link from "next/link";
import { GitHub, Link as LinkIcon } from "@mui/icons-material";

export default function Project({ project }) {
  return (
    <Link href={`/projects/${project._id}`}>
      <div className={styles.project}>
        <div className={styles.top}>
          <img
            src="/assets/project.jpg"
            alt="project"
            className={styles.projectImg}
          />
          <div className={styles.topText}>
            <span className={styles.title}>{project.title}</span>
            <span className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nemo vero unde repellat neque, et rerum numquam quisquam
              blanditiis a iusto adipisci ratione explicabo. Amet?
            </span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <span className={styles.batch}>MERN</span>
            <span className={styles.batch}>Redux</span>
            <span className={styles.batch}>Firebase</span>
          </div>
          <div className={styles.bottomRight}>
            <GitHub fontSize="large" className={styles.linkIcon} />
            <LinkIcon fontSize="large" className={styles.linkIcon} />
          </div>
        </div>
      </div>
    </Link>
  );
}
