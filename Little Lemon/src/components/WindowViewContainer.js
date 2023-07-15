import TableContainer from "./TableContainer";
import styles from "./WindowViewContainer.module.css";
const WindowViewContainer = () => {
  return (
    <div className={styles.list}>
      <div className={styles.row}>
        <TableContainer
          title="Table for 2"
          title1="Table 1"
          subtitle="Window View"
        />
        <TableContainer
          title="Table for 4"
          title1="Table 2"
          subtitle="Outdoor Seating"
        />
        <TableContainer
          title="Table for 6"
          title1="Table 3"
          subtitle="Private Room"
        />
      </div>
    </div>
  );
};

export default WindowViewContainer;
