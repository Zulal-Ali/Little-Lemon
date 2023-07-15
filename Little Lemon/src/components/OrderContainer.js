import styles from "./OrderContainer.module.css";
const OrderContainer = () => {
  return (
    <div className={styles.homeorder}>
      <div className={styles.orderForDelivery}>Order FOR DELIVERY!</div>
      <div className={styles.pills}>
        <div className={styles.pill}>
          <div className={styles.label}>Lunch</div>
        </div>
        <div className={styles.pill}>
          <div className={styles.label}>Mains</div>
        </div>
        <div className={styles.pill}>
          <div className={styles.label}>Desserts</div>
        </div>
        <div className={styles.pill}>
          <div className={styles.label}>A La Carte</div>
        </div>
        <div className={styles.pill}>
          <div className={styles.label}>Specials</div>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
