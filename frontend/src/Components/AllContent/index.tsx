import styles from "./AllContent.module.css";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";
import Suggestions from "../Suggestions";

const AllContent = () => {
  return (
    <div className={styles.allContent}>
      <Sidebar />
      <MainContent />
      <Suggestions />
    </div>
  );
};

export default AllContent;
