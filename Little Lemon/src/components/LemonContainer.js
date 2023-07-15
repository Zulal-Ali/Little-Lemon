import HomeCTA from "./HomeCTA";
import styles from "./LemonContainer.module.css";
const LemonContainer = () => {
  return (
    <div className={styles.homehero}>
      <div className={styles.title}>
        <div className={styles.littleLemon}>Little Lemon</div>
        <div className={styles.chicago}>Chicago</div>
      </div>
      <HomeCTA homeCTAPosition="unset" homeCTAJustifyContent="center" />
    </div>
  );
};

export default LemonContainer;
