import styles from "./Departamentos.module.scss";
import DepConsultoria from "./departamentos/DepConsultoria";
import DepHardware from "./departamentos/DepHardware";
import DepSoftware from "./departamentos/DepSoftware";

const Departamentos = () => {
  return (
    <>
      <div className={styles.container}>
        <DepHardware />
        <DepSoftware />
        <DepConsultoria />
      </div>
    </>
  );
};

export default Departamentos;
