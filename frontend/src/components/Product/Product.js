import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <>
      <div className="product">
        <div className="img__wrapper">
          <img src={imageUrl} alt={name} />
        </div>
        <Link to={`/product/${productId}`} className="info__button">
          Visualizar
        </Link>
        <div className="product__info">
          <p className="info__name">{name}</p>

          {/*  <p className="info__description">
            {description.substring(0, 100)}...
          </p>
  */}
          <p className="info__price">${price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
