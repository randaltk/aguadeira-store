import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CestaSabonetes from "../../assets/images/teste.jpg";
import X from "../../assets/images/sabonete-lavanda.jpg";
import depoimentos from "../../assets/images/depoimentos.jpg";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
//Components
import Product from "../../components/Product/Product";
import Instagram from "../../components/Instagram/Instagram";
import Footer2 from "../../components/Footer2/Footer2";
import Footer from "../../components/Footer/Footer";

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
      <div className="capa__wrapper">
        <h1 className="destaquesh1">Destaques</h1>
        <p className="pages__line"></p>
        <div className="destaques__wrapper">
          <div className="blog__post1" id="fit">
            {products.slice(0, 4).map((product) => (
              <div className="left__image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
            ))}
          </div>

          <h1 className="destaquesh1" id="post2h2">
            Lançamentos
          </h1>
          <p className="pages__line"></p>
          <div className="blog__post1">
            {products.slice(2, 6).map((product) => (
              <div className="left__image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
            ))}
          </div>
          <Link to="/about" style={{ textDecoration: "none" }}>
            {" "}
            <h1 className="destaquesh1" id="post2h2">
              Conheça a marca
            </h1>
          </Link>

          <p className="pages__line"></p>
          <br />
          <br />

          {/*    <p>~ thinking about seven generations ahead</p>
          <br />
          <p>
            {" "}
            é um paraíso herbal e um cantinho para brujerias. Aqui você encontra
            produtos naturais, artesanais e 100% do processo é feito por
            mulheres, com muita magia e amor.
          </p>
          */}
          <div className="blog__post1">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <img
                className="img__post1"
                src={depoimentos}
                alt="cesta-sabonetes"
              />
            </Link>

            <br />

            <p className="maozinha__desc" id="depoimentodesc">
              “Os cosméticos naturais da aguadeira possuem o poder das plantas e
              são feitos à mão com amor e dedicação. São alquimias mágicas e
              únicas! Ao comprar de pequenos produtores de cosméticos naturais
              você não só está ajudando sonhos a se realizarem, como também
              desestimula grandes empresas a continuarem a produzir cosméticos
              poluentes e prejudiciais à saúde..” <br></br>
            </p>
          </div>
        </div>
        <Instagram />
      </div>{" "}
      <Footer2 />
      <Footer />
    </>
  );
};

export default HomeScreen;
