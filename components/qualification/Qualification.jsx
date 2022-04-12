import styles from "./qualification.module.css";
import { useState, useEffect } from "react";
import { Work, School, EventNote } from "@mui/icons-material";

// qualification data import
import { EDUCATION, EXPERIENCE } from "../../source";

export default function Qualification() {
  const [type, setType] = useState("education");
  const [data, setData] = useState(EDUCATION);

  useEffect(() => {
    if (type === "education") {
      setData(EDUCATION);
    } else if (type === "experience") {
      setData(EXPERIENCE);
    }
  }, [type]);

  return (
    <div className={styles.qualification}>
      <div className={styles.top}>
        <span
          className={`${styles.typeTitle} ${
            type === "education" && styles.active
          }`}
          onClick={() => setType("education")}
        >
          <School fontSize="large" className={styles.icon} /> Education
        </span>
        <span
          className={`${styles.typeTitle} ${
            type === "experience" && styles.active
          }`}
          onClick={() => setType("experience")}
        >
          <Work fontSize="large" className={styles.icon} /> Experience
        </span>
      </div>
      <div className={styles.bottom}>
        {data.map((d, i) => (
          <div className={styles.item} key={d.id}>
            <div className={styles.wrapper}>
              <span className={styles.title}>{d.title}</span>
              <span className={styles.subtitle}>{d.subtitle}</span>
              {type === "education" && (
                <span className={styles.timespan}>
                  <EventNote /> {d.timespan}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
