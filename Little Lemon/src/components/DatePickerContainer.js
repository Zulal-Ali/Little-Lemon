import styles from "./DatePickerContainer.module.css";
const DatePickerContainer = ({ title, text, info }) => {
  return (
    <div className={styles.input}>
      <div className={styles.title}>{title}</div>
      <div className={styles.textfield}>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

export default DatePickerContainer;
