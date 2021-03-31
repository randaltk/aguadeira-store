import "./StoreScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer2/Footer2";

//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="destaquesh1">Loja</h1>
      <p className="pages__line" id="lessLine"></p>
      <div className="homescreen__products">
        {loading ? (
          <h2>{""}</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
      <Footer2 />
      <Footer />
    </>
  );
};

export default HomeScreen;
