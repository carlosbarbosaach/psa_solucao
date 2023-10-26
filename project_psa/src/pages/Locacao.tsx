import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import styles from "./Pages.module.scss";

const Locacao = () => {
  return (
    <>
      <section className={styles.container_section}>
        <div className={styles.content}>
          <Breadcrumb />
          <h1>Locação</h1>
        </div>
      </section>
    </>
  );
};

export default Locacao;
