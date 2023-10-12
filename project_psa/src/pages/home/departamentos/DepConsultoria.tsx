import styles from "./AllDepartamento.module.scss";
import Lenovo from "../../../assets/lenovo_sr650.jpg";

const DepConsultoria = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.departament_content}>
          <h2>Consultoria</h2>
          <p>Como podemos ajudá-lo?</p>
          <ul>
            <li>
              Analise de ambientes e desenvolvimento de projetos de
              infra-estrutura
            </li>
            <li>Integração de equipamentos a infra estrutura-existente</li>
            <li>Implantação de Sistemas, Software e soluções</li>
            <li>
              Locação de Servidores, Storages, Unidades de Fitas, Micros e
              Monitores
            </li>
          </ul>
        </div>
        <div className={styles.departament_img}>
          <img
            className={styles.img}
            src={Lenovo}
            alt="Servidor Lenovo"
            width="355"
            height="200"
          ></img>
        </div>
      </div>
    </>
  );
};

export default DepConsultoria;
