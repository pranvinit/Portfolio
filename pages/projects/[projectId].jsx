import styles from "./project.module.css";
const connectDB = require("../../server/db/connect");
const ProjectModel = require("../../server/models/Project");

import { GitHub, Link as LinkIcon } from "@mui/icons-material";

export default function Project({ project }) {
  return (
    <div className={styles.project}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.desc}>
            Lorem, ipsum Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ipsam doloremque vel nihil architecto! Dolore alias dolorem
            amet soluta, obcaecati quas.
          </span>
        </div>
        <div className={styles.center}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/omWmWu1XO8U"
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
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

export async function getStaticPaths() {
  const getProjectIds = async () => {
    try {
      await connectDB();
      const data = await ProjectModel.find({}).select("_id");
      const paths = JSON.stringify(data);
      return JSON.parse(paths);
    } catch (e) {
      console.log(e);
    }
  };

  const idList = await getProjectIds();
  const paths = idList.map((i) => ({
    params: { projectId: i._id },
  }));

  console.log(paths);

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { projectId } = params;

  const getProject = async () => {
    try {
      await connectDB();
      const data = await ProjectModel.findOne({ _id: projectId });
      const project = JSON.stringify(data);
      return project;
    } catch (e) {
      console.log(e);
    }
  };

  const project = await getProject();
  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
    revalidate: 60 * 30,
  };
}
