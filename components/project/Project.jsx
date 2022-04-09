import styles from "./project.module.css";

export default function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.top}>
        <img
          src="/assets/project.jpg"
          alt="project"
          className={styles.projectImg}
        />
        <div className={styles.topText}>
          <span className={styles.title}>Lorem, ipsum</span>
          <span className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            nemo vero unde repellat neque, et rerum numquam quisquam blanditiis
            a iusto adipisci ratione explicabo. Amet?
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>Batches Batches Batches</div>
        <div className={styles.bottomRight}>Github &amp; Hosted Links</div>
      </div>
    </div>
  );
}
