import styles from "./project.module.css";
const connectDB = require("../../server/db/connect");
const ProjectModel = require("../../server/models/Project");

import { GitHub, Link as LinkIcon } from "@mui/icons-material";

export default function Project({ data }) {
  const project = JSON.parse(data);
  return (
    <div className={styles.project}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.desc}>{project.description}</span>
        </div>
        <div className={styles.center}>
          <iframe
            className={styles.video}
            src={project.video}
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.bottom}>
          <a
            href={project.githubRepository}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Github Repository
            <GitHub className={styles.linkIcon} fontSize="large" />
          </a>
          {project.hostedOn && (
            <a
              href={project.hostedOn}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              Hosted On
              <LinkIcon className={styles.linkIcon} fontSize="large" />
            </a>
          )}
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

  const data = await getProject();
  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    },
    revalidate: 60 * 30,
  };
}
