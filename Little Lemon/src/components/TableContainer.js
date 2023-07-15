import styles from "./TableContainer.module.css";
const TableContainer = ({ title, title1, subtitle }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
      <div className={styles.textContent}>
        <div className={styles.title1}>{title1}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.iconButtons}>
          <div className={styles.icon}>✅</div>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
