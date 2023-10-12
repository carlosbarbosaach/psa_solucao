import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHardDrive,
  faComputer,
  faCircleCheck,
  faLayerGroup,
  faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Categorias.module.scss";

const Categorias = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.categoria}>
          <FontAwesomeIcon className={styles.Icon} icon={faHardDrive} />
          <h3 className={styles.categoria_title}>Storage IBM</h3>
          <p className={styles.categoria_text}>
            A IBM é líder mundial e pioneira no armazenamento de dados.
          </p>
        </div>
        <div className={styles.categoria}>
          <FontAwesomeIcon className={styles.Icon} icon={faComputer} />
          <h3 className={styles.categoria__title}>Vendas</h3>
          <p className={styles.categoria__text}>
            Para uma computação mais inteligente e econômica verifique nossa
            linha de hardware.
          </p>
        </div>
        <div className={styles.categoria}>
          <FontAwesomeIcon className={styles.Icon} icon={faLayerGroup} />
          <h3 className={styles.categoria_title}>Locação</h3>
          <p className={styles.categoria_text}>
            Soluções de acordo com as suas necessidades e seu perfil de negócio.
          </p>
        </div>
        <div className={styles.categoria}>
          <FontAwesomeIcon className={styles.Icon} icon={faCircleCheck} />
          <h3 className={styles.categoria_title}>Serviços</h3>
          <p className={styles.categoria_text}>Como podemos ajudá-lo?</p>
        </div>
        <div className={styles.categoria}>
          <FontAwesomeIcon className={styles.Icon} icon={faCloudArrowDown} />
          <h3 className={styles.categoria_title}>DataCenter</h3>
          <p className={styles.categoria_text}>Infraestrutura</p>
        </div>
      </div>
    </>
  );
};

export default Categorias;
