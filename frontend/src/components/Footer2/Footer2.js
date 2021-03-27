import "./Footer2.css";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <>
      <div className="footer__wrapper">
        <nav className="footer__nav">
          <ul className="footer__ul">
            <div className="line"></div>
            <h2 className="footer__h2">Aguadeira Atelier</h2>
            <li>
              <Link to="/">Loja</Link>
            </li>

            <li>
              <Link to="/about">Sobre</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contato</Link>
            </li>

            <li>
              <Link to="/cart">Carrinho</Link>
            </li>
          </ul>

          <ul className="footer__ul">
            <div className="line"></div>
            <h2 className="footer__h2">Ajuda</h2>
            <li>
              <Link to="/">Envio e Retornos</Link>
            </li>

            <li>
              <Link to="/about">Política da Loja</Link>
            </li>

            <li>
              <Link to="/blog">Métodos de pagamento</Link>
            </li>

            <li>
              <Link to="/contact">{""}</Link>
            </li>

            <li>
              <Link to="/cart">{""}</Link>
            </li>
          </ul>

          <ul className="footer__ul">
            <div className="line"></div>
            <h2 className="footer__h2">Contato</h2>
            <li>
              <Link to="/">aguadeira.atelier@gmail.com</Link>
            </li>

            <li>
              <Link to="/about">@aguadeira.atelier</Link>
            </li>

            <li>
              <Link to="/blog">{""}</Link>
            </li>

            <li>
              <Link to="/contact">{""}</Link>
            </li>

            <li>
              <Link to="/cart">{""}</Link>
            </li>
          </ul>

          <ul className="footer__ul">
            <div className="line"></div>
            <h2 className="footer__h2">Midias</h2>
            <li>
              <Link to="/">Facebook</Link>
            </li>

            <li>
              <Link to="/about">Instagram</Link>
            </li>

            <li>
              <Link to="/blog">{""}</Link>
            </li>

            <li>
              <Link to="/contact">{""}</Link>
            </li>

            <li>
              <Link to="/cart">{""}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Footer2;
