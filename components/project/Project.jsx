import styles from "./project.module.css";
import Link from "next/link";
import Image from "next/image";

import { GitHub, Link as LinkIcon } from "@mui/icons-material";

// animation imports
import { motion } from "framer-motion";
import { OPACITY } from "../../variants/Variants";

export default function Project({ project }) {
  return (
    <motion.div variants={OPACITY} initial="initial" animate="animate">
      <div className={styles.project}>
        <Link href={`/projects/${project._id}`}>
          <div className={styles.top}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.projectImg}
                src={project.images[0]}
                alt="project"
                width={600}
                height={400}
                layout="raw"
                quality={100}
              />
            </div>
            <div className={styles.topText}>
              <span className={styles.title}>{project.title}</span>
              <span className={styles.desc}>
                {project.description.length > 100
                  ? project.description.substring(0, 100) + "..."
                  : project.description}
              </span>
            </div>
          </div>
        </Link>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            {project.batches.map((b) => {
              return (
                <span key={b} className={styles.batch}>
                  {b}
                </span>
              );
            })}
          </div>
          <div className={styles.bottomRight}>
            <a
              href={project.githubRepository}
              target="_blank"
              rel="noreferrer"
              className={styles.linkIcon}
            >
              <GitHub fontSize="large" />
            </a>
            {project.hostedOn && (
              <a
                href={project.hostedOn}
                target="_blank"
                rel="noreferrer"
                className={styles.linkIcon}
              >
                <LinkIcon fontSize="large" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
