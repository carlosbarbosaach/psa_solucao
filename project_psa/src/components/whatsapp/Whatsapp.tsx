import styles from "./Whatsapp.module.scss";
import WhatsappIcon from "../../assets/Icons/whatsapp-btn-icon.webp";

const Whatsapp = () => {
  return (
    <>
      <div>
        <a
          className={styles.floating_button}
          href="https://api.whatsapp.com/send?phone=5548998117717&text=Olá gostaria de mais informação.!&source=&data=&app_absent=&type=&external_id="
          target="_blank"
        >
          <img
            className={styles.img_whatsapp}
            src={WhatsappIcon}
            alt="WhatsApp Icon"
          ></img>
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
