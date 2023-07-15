import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DatePickerContainer from "../components/DatePickerContainer";
import WindowViewContainer from "../components/WindowViewContainer";
import styles from "./Page.module.css";
const Page = () => {
  const navigate = useNavigate();

  const onIcLeftIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/customer-details");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/customer-details");
  }, [navigate]);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <img className={styles.topIcon} alt="" src="/top.svg" />
        <div className={styles.content}>
          <img
            className={styles.icLeftIcon}
            alt=""
            src="/icleft.svg"
            onClick={onIcLeftIconClick}
          />
          <div className={styles.title}>Reserve a Table</div>
          <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
        </div>
      </div>
      <div className={styles.sectionTitle}>
        <div className={styles.text}>
          <div className={styles.title1}>Select Date and Time</div>
          <div className={styles.subtitle}>
            Choose your preferred reservation details
          </div>
        </div>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.title2}>Confirm</div>
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
      </div>
      <DatePickerContainer
        title="Date"
        text="Select date"
        info="Please choose a date"
      />
      <DatePickerContainer
        title="Time"
        text="Select time"
        info="Please choose a time"
      />
      <div className={styles.sectionTitle}>
        <div className={styles.text}>
          <div className={styles.title1}>Number of Guests</div>
          <div className={styles.subtitle}>
            Select the number of guests for the reservation
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.title2}>Confirm</div>
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
      </div>
      <div className={styles.selection}>
        <div className={styles.title5}>Guests</div>
        <div className={styles.chipGroup}>
          <div className={styles.chip}>
            <div className={styles.text2}>1</div>
          </div>
          <div className={styles.chip}>
            <div className={styles.text2}>2</div>
          </div>
          <div className={styles.chip}>
            <div className={styles.text2}>3</div>
          </div>
          <div className={styles.chip}>
            <div className={styles.text2}>4</div>
          </div>
          <div className={styles.chip}>
            <div className={styles.text2}>5</div>
          </div>
          <div className={styles.chip}>
            <div className={styles.text2}>6</div>
          </div>
        </div>
        <div className={styles.subtitle}>
          Please choose the number of guests
        </div>
      </div>
      <div className={styles.button2}>
        <div className={styles.seconday}>
          <div className={styles.title6}>Reset</div>
        </div>
        <div className={styles.primary}>
          <div className={styles.title6}>Search</div>
        </div>
      </div>
      <div className={styles.sectionTitle}>
        <div className={styles.text}>
          <div className={styles.title1}>Available Tables</div>
        </div>
        <div className={styles.button} onClick={onButtonContainer3Click}>
          <div className={styles.title2}>Select</div>
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
      </div>
      <WindowViewContainer />
    </div>
  );
};

export default Page;
