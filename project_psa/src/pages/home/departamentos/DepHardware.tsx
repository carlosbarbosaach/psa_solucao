import styles from "./AllDepartamento.module.scss";
import V7000 from "../../../assets/V7000.png";

const DepHardware = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.departament_content}>
          <h2>Hardware</h2>
          <p>
            Para uma computação mais inteligente e econômica verifique nossa
            linha de hardware.
          </p>
          <ul>
            <li>Escalabilidade e Flexibilidade ao seu alcance.</li>
            <li>Servidores IBM (System X, System P, IBM Pure System)</li>
            <li>Blade Center</li>
            <li>Storage e Backup</li>
            <li>Desktops</li>
            <li>Workstations</li>
            <li>Notebooks</li>
          </ul>
        </div>
        <div className={styles.departament_img}>
          <img
            className={styles.img}
            src={V7000}
            alt="V7000"
            width="355"
            height="200"
          ></img>
        </div>
      </div>
    </>
  );
};

export default DepHardware;
