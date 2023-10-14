import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcMastercard,
  faCcVisa,
  faCcAmex,
  faBarcode,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content_quemsomos}>
          <ul>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Termo de uso</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Trabalhe conosco</a>
            </li>
          </ul>
        </div>
        <div className={styles.forma_de_pagamento}>
          <ul>
            <li>
              <a href="#">Forma de Pagamento</a>
            </li>
          </ul>
          <div className={styles.container_icons}>
            {/* <FontAwesomeIcon icon={faBarcode} className={styles.Icon} /> */}
            <FontAwesomeIcon icon={faCcAmex} className={styles.Icon} />
            <FontAwesomeIcon icon={faCcVisa} className={styles.Icon} />
            <FontAwesomeIcon icon={faCcMastercard} className={styles.Icon} />
            <FontAwesomeIcon icon={faCcPaypal} className={styles.Icon} />
          </div>
        </div>
        <div>rede social</div>
        <div className={styles.content_matriz__filial}>
          <div className={styles.content_matriz}>
            <p>Florianópolis/Santa Catarina, Bairro Saco Grande - 88032-001</p>
            <p>Rodovia Virgílio Várzea, 1974, Sala 401</p>
            <div className={styles.telContato}>
              <ul>
                <li>
                  <a href="tel:+5548998117717">(48) 3952-0900</a>
                  <a href="#">(48) 98405-9864</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.content_filial}>
            <p>Blumenau/Santa Catarina, bairro velha - 89.036-239</p>
            <p>Rua Doutor Leo de Carvalho – n° 74 – Sala 1001</p>
            <div className={styles.telContato}>
              <ul>
                <li>
                  <a href="tel:+5548998117717">(48) 3952-0922</a>
                  <a href="#">(48) 98405-9864</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
