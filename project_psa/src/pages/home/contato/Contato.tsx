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
          <div className="form-group">
            <label>Nome Completo:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.form_group}>
            <label>Telefone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.form_group}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form_group}>
            <label>Mensagem:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Contato;
