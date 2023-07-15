import { useCallback } from "react";
import PersonalInfoContainer from "../components/PersonalInfoContainer";
import { useNavigate } from "react-router-dom";
import styles from "./CUSTOMERDETAILS.module.css";
const CUSTOMERDETAILS = () => {
  const navigate = useNavigate();

  const onConfirmContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIcLeftIconClick = useCallback(() => {
    navigate("/page");
  }, [navigate]);

  return (
    <div className={styles.customerDetails}>
      <div className={styles.recap}>
        <div className={styles.recapChild} />
        <div className={styles.yourReservation}>YOUR RESERVATION:</div>
        <b className={styles.dateTimeNumberContainer}>
          <p className={styles.date}>Date:</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>Time:</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>Number of diners:</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>Total Amount:</p>
        </b>
        <b className={styles.mar20231800Container}>
          <p className={styles.date}>{`16 Mar 2023 `}</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>18:00</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>4</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>&nbsp;</p>
          <p className={styles.date}>$ 50</p>
        </b>
      </div>
      <PersonalInfoContainer />
      <div className={styles.confirm} onClick={onConfirmContainerClick}>
        <div className={styles.confirmChild} />
        <b className={styles.confirmReservation}>Confirm Reservation</b>
      </div>
      <div className={styles.navbar}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <img
        className={styles.icLeftIcon}
        alt=""
        src="/icleft.svg"
        onClick={onIcLeftIconClick}
      />
    </div>
  );
};

export default CUSTOMERDETAILS;
