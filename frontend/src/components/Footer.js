import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer__wrapper-i">
        <a
          to=""
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/aguadeira.atelier/"
          style={{ color: "#000" }}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/aguadeira.atelier/"
          style={{ color: "#000" }}
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="footer__wrapper">
        <p className="footer__desc">
          Aguadeira Atelier© Todos os Direitos Reservados.
        </p>
      </div>

      <div className="footer__wrapper2">
        <p className="footer__desc2">
          CPF/CNPJ: 35.353.782/0001-81 - Rua K, 90 - São Paulo, SP 74120-040
        </p>
      </div>

      <div className="footer__wrapper3">
        <p className="footer__desc3">aguadeira.atelier@gmail.com</p>
      </div>
    </>
  );
};

export default Footer;
