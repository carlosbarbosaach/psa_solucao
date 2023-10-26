import { useState } from "react";
import styles from "./ServidorOrcamento.module.scss";

const ServidorOrcamento = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário ou processar o orçamento
    console.log("Formulário enviado com sucesso!");
    console.log("Nome: " + nome);
    console.log("Email: " + email);
    console.log("Telefone: " + telefone);
    console.log("Mensagem: " + mensagem);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h2>Solicite um Orçamento</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default ServidorOrcamento;
