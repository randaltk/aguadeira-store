import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../components/Logo";
const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <>
      <div className="flex__mobile">
        <Logo />
        <nav className="navbar">
          <ul className="navbar__links">
            <li>
              <Link to="/">Loja</Link>
            </li>
            <li> ✧ </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li> ✧ </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li> ✧ </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
            <li> ✧ </li>
            <li>
              <Link to="/cart" className="cart__link">
                <i className="fas fa-shopping-cart"></i>
                <span>
                  Carrinho{" "}
                  <span className="cartlogo__badge">{getCartCount()}</span>
                </span>
              </Link>
            </li>
          </ul>

          <div className="hamburger__menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
