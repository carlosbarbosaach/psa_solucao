import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import styles from "./Pages.module.scss";

const Contato = () => {
  return (
    <>
      <section className={styles.container_section}>
        <div className={styles.content}>
          <Breadcrumb />
          <h1>Contato</h1>
        </div>
      </section>
    </>
  );
};

export default Contato;
