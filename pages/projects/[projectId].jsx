import styles from "./project.module.css";
import { useRouter } from "next/router";

import { GitHub, Link as LinkIcon } from "@mui/icons-material";

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;

  console.log(projectId);

  return (
    <div className={styles.project}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <span className={styles.title}>Lorem, ipsum.</span>
          <span className={styles.desc}>
            Lorem, ipsum Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ipsam doloremque vel nihil architecto! Dolore alias dolorem
            amet soluta, obcaecati quas.{" "}
          </span>
        </div>
        <div className={styles.center}>
          <iframe
            width="864"
            height="486"
            src="https://www.youtube.com/embed/omWmWu1XO8U"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.bottom}>
          <span className={styles.link}>
            Github Repository
            <GitHub className={styles.linkIcon} fontSize="large" />
          </span>
          <span className={styles.link}>
            Hosted On
            <LinkIcon className={styles.linkIcon} fontSize="large" />
          </span>
        </div>
      </div>
    </div>
  );
}
