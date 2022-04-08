import styles from "./project.module.css";
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;
  console.log(router, router.query);

  return <div className="project">Project</div>;
}
