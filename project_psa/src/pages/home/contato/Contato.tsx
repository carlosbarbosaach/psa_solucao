import { useState } from "react";
import styles from "./Contato.module.scss";

const Contato = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário pode ser adicionada aqui
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.Title_contato}>
          <h1>Contato</h1>
        </div>
        <form className={styles.contact_form} onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label></label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome*"
            />
          </div>
          <div className={styles.form_group}>
            <label></label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefone*"
            />
          </div>
          <div className={styles.form_group}>
            <label></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
            />
          </div>
          <div className={styles.form_group}>
            <label></label>
            <textarea
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem*"
            />
          </div>
          <div className={styles.container_btn}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contato;
