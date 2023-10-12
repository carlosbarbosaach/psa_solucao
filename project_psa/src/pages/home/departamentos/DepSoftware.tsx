import styles from "./AllDepartamento.module.scss";
import Esxi from "../../../assets/esxi.png";

const DepSoftware = () => {
  return (
    <>
      <div className={styles.container_revese}>
        <div className={styles.departament_content}>
          <h2>Software</h2>
          <p>
            Soluções de acordo com as suas necessidades e seu perfil de negócio.
          </p>
          <ul>
            <li>Microsoft</li>
            <li>RedHat</li>
            <li>Oracle</li>
            <li>VmWare</li>
            <li>IBM</li>
            <li>SUSE</li>
          </ul>
        </div>
        <div className={styles.departament_img}>
          <img
            className={styles.img}
            src={Esxi}
            alt="Software Esxi"
            width="355"
            height="200"
          ></img>
        </div>
      </div>
    </>
  );
};

export default DepSoftware;
