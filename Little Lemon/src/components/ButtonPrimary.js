import { useMemo } from "react";
import styles from "./ButtonPrimary.module.css";
const ButtonPrimary = ({ buttonPrimaryPosition }) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      position: buttonPrimaryPosition,
    };
  }, [buttonPrimaryPosition]);

  return (
    <div className={styles.buttonprimary} style={buttonPrimaryStyle}>
      <b className={styles.label}>Reserve a table</b>
    </div>
  );
};

export default ButtonPrimary;
