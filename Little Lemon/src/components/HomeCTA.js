import { useMemo } from "react";
import styles from "./HomeCTA.module.css";
const HomeCTA = ({ homeCTAPosition, homeCTAJustifyContent }) => {
  const homeCTAStyle = useMemo(() => {
    return {
      position: homeCTAPosition,
      justifyContent: homeCTAJustifyContent,
    };
  }, [homeCTAPosition, homeCTAJustifyContent]);

  return (
    <div className={styles.homecta} style={homeCTAStyle}>
      <div className={styles.frameParent}>
        <div className={styles.weAreAFamilyOwnedMediterrWrapper}>
          <div className={styles.weAreA}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </div>
        </div>
        <img className={styles.imgPopIcon} alt="" src="/img-pop@2x.png" />
      </div>
      <div className={styles.buttonprimary}>
        <b className={styles.label}>Reserve a table</b>
      </div>
    </div>
  );
};

export default HomeCTA;
