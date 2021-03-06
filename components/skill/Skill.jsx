import styles from "./skill.module.css";
import { useState } from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

import { AnimatePresence, motion } from "framer-motion";

export default function Skill({ skill }) {
  const [expanded, setExpanded] = useState(false);

  const getSkillIcon = (type) => {
    switch (type) {
      case "Languages":
        return "pl.png";
      case "Libraries & Frameworks":
        return "lib.png";
      case "Tools":
        return "tools.png";
      default:
        break;
    }
  };

  return (
    <div className={styles.skill}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <img
            className={styles.skillImg}
            src={`/assets/png/${getSkillIcon(skill.type)}`}
            alt="skill"
          />
          <div className={styles.skillText}>
            <span className={styles.type}>{skill.type}</span>
            <span className={styles.desc}>{skill.desc}</span>
          </div>
          <div className={styles.expandArrowContainer}>
            {!expanded ? (
              <KeyboardArrowDown
                fontSize="large"
                className={styles.expandIcon}
                onClick={() => setExpanded(true)}
              />
            ) : (
              <KeyboardArrowUp
                fontSize="large"
                className={styles.expandIcon}
                onClick={() => setExpanded(false)}
              />
            )}
          </div>
        </div>
        {expanded && (
          <div className={styles.expanded}>
            <div className={styles.skillContainer}>
              {skill.data.map((i) => (
                <div className={styles.item} key={i.name}>
                  <img
                    className={styles.itemImg}
                    src={`/assets/${i.icon}`}
                    alt="item"
                  />
                  <span className={styles.itemTitle}>{i.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
