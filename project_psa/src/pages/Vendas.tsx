import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import styles from "./Pages.module.scss";
import { useState } from "react";
import ServidorOrcamento from "./orcamento/ServidorOrcamento";

const Vendas = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <section className={styles.container_section}>
        <Breadcrumb />
        <div className={styles.content}>
          <section className={styles.container}>
            <div className={styles.content_info}>
              <div>
                <button
                  onClick={() => handleButtonClick(<ServidorOrcamento />)}
                >
                  Servidor
                </button>
              </div>
              <div>
                <button onClick={() => handleButtonClick("Storage")}>
                  Storage
                </button>
              </div>
              <div>
                <button onClick={() => handleButtonClick("Equipamento")}>
                  Equipamento
                </button>
              </div>
              <div>
                <button onClick={() => handleButtonClick("Software")}>
                  Software
                </button>
              </div>
            </div>
          </section>
          <section className={styles.container2}>
            {selectedOption && <div>{selectedOption}</div>}
          </section>
        </div>
      </section>
    </>
  );
};

export default Vendas;
