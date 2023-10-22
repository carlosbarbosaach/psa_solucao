import styles from "./Footer.module.scss";
import Facebook from "../../assets/Icons/facebook-icon.png";
import Instagram from "../../assets/Icons/instagram-icon.png";
import YouTube from "../../assets/Icons/youtube-icon.png";

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
        <div className={styles.rede_social}>
          <ul>
            <li>
              <a href="#">Redes Social</a>
            </li>
            <div className={styles.redeSocial_icons}>
              <img src={Facebook} alt="Icon Facebook" width={35} height={35} />
              <img
                src={Instagram}
                alt="Icon Instagram"
                width={35}
                height={35}
              />
              <img src={YouTube} alt="Icon YouTube" width={35} height={35} />
            </div>
          </ul>
        </div>
        <div className={styles.content_matriz__filial}>
          <div className={styles.content_matriz}>
            <h3>Matriz</h3>
            <p>Florianópolis/Santa Catarina, Bairro Saco Grande - 88032-001</p>
            <p>Rodovia Virgílio Várzea, 1974, Sala 401</p>
            <div className={styles.telContato}>
              <ul>
                <li>
                  <a className={styles.tel_icon} href="tel:+5548998117717">
                    (48)3952-0900
                  </a>
                  <a className={styles.tel_whatsapp} href="tel:+5548998117717">
                    (48)98405-9864
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.content_filial}>
            <h3>Filial</h3>
            <p>Blumenau/Santa Catarina, bairro velha - 89.036-239</p>
            <p>Rua Doutor Leo de Carvalho – n° 74 – Sala 1001</p>
            <div className={styles.telContato}>
              <ul>
                <li>
                  <a className={styles.tel_icon} href="tel:+5548998117717">
                    (48) 3952-0922
                  </a>
                  <a className={styles.tel_whatsapp} href="#">
                    (48) 98405-9864
                  </a>
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
