import styles from "./PersonalInfoContainer.module.css";
const PersonalInfoContainer = () => {
  return (
    <div className={styles.personalInfo}>
      <div className={styles.personalInfoChild} />
      <div className={styles.detail}>Detail</div>
      <b className={styles.firstName}>First name* :</b>
      <b className={styles.lastName}>{`Last name* : `}</b>
      <b className={styles.phoneNumber}>{`Phone Number* : `}</b>
      <div className={styles.personalInfoItem} />
      <div className={styles.fieldIsMandatory}>
        * field is mandatory to enter
      </div>
      <div className={styles.personalInfoInner} />
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default PersonalInfoContainer;
