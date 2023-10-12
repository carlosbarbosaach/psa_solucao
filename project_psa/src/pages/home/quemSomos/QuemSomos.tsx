import styles from "./QuemSomos.module.scss";

const QuemSomos = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoQuemSomos}>
          <div className={styles.infoQuemSomos_text}>
            <h1>PSA Soluções em TI</h1>
            <p>
              Há mais de três décadas, a
              <span className={styles.text_highlight}>
                {" "}
                PSA Soluções em TI{" "}
              </span>{" "}
              tem sido uma referência no mercado de tecnologia, fornecendo
              soluções inovadoras e serviços excepcionais.
            </p>
            <p>
              <span className={styles.text_highlightBlack}>
                Amplo portfólio de produtos e serviços:
              </span>{" "}
              Oferecemos um portfólio diversificado de produtos de alta
              qualidade e serviços personalizados, atendendo às necessidades
              variadas de nossos clientes.
            </p>
            <p>
              <span className={styles.text_highlightBlack}>
                Equipe Altamente Capacitada e Certificada:
              </span>{" "}
              Nossa equipe é composta por profissionais altamente treinados e
              certificados, garantindo que nossos clientes tenham acesso a
              especialistas experientes em tecnologia.
            </p>
            <p>
              <span className={styles.text_highlightBlack}>
                Expansão Contínua:
              </span>{" "}
              Estamos em constante crescimento e expansão, investindo em
              infraestrutura de última geração para atender às crescentes
              demandas do mercado.
            </p>
            <p>
              <span className={styles.text_highlightBlack}>
                Parcerias Estratégicas:
              </span>{" "}
              Mantemos relacionamentos sólidos com os principais players do
              mercado de tecnologia, o que nos permite oferecer as soluções mais
              avançadas aos nossos clientes.
            </p>
            <p>
              <span className={styles.text_highlightBlack}>
                DataCenter Avançado:
              </span>{" "}
              Nossas instalações de DataCenter contam com tecnologia de ponta,
              garantindo a segurança e a eficiência necessárias para a
              hospedagem de sistemas críticos.
            </p>
          </div>
          <div className={styles.container_video}>
            <iframe
              className={styles.video_iframe}
              width="560"
              height="315"
              src="https://www.psa.com.br/static/PSA9.mp4"
              title="Vídeo da Empresa"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuemSomos;
