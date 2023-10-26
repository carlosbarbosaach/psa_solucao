import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import styles from "./Pages.module.scss";

const DataCenter = () => {
  return (
    <>
      <section className={styles.container_section}>
        <div className={styles.content}>
          <Breadcrumb />
          <h1>DataCenter</h1>
        </div>
      </section>
    </>
  );
};

export default DataCenter;
