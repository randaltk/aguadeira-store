import CestaSabonetes from "../../assets/images/teste.jpg";
import X from "../../assets/images/sabonete-lavanda.jpg";
import depoimentos from "../../assets/images/depoimentos.jpg";
import "./HomeScreen.css";
import Instagram from "../../components/Instagram/Instagram";
import Footer2 from "../../components/Footer2/Footer2";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <>
      <div className="capa__wrapper">
        <h1 className="destaquesh1">Destaques</h1>
        <p className="pages__line"></p>
        <div className="destaques__wrapper">
          <div className="blog__post1">
            <img
              className="img__post1"
              src={CestaSabonetes}
              alt="cesta-sabonetes"
            />

            <p className="p__post1">
              Todo sabão é feito da mistura de ácidos graxos (gorduras) e álcali
              (soda cáustica, potassa, ou cinzas), resultando em sais e
              glicerina. Um sabão artesanal em barra bem feito, de fórmula
              equilibrada, bons ingredientes e bom para a pele geralmente possui
              um ph entre 8 e 10. Os sabonetes industrializados, possuem ph
              próximo de 11, o que poderia se considerar como um dos motivos –
              mas não o único – dos sabonetes industrializados irritarem a pele,
              principalmente as sensíveis, os detergentes utilizados nestes
              sabonetes provocam a perda de água das camadas mais profundas da
              pele, proporcionando o ressecamento ou desequilíbrio do PH. Os
              sabonetes industriais possuem vários componentes químicos
              desnecessários, entre os mais comuns estão o lauril éter sulfato
              de sódio e o propilenoglicol, ditos prejudiciais para a pele
              dentro da linha de produtos naturais, são usados para proporcionar
              mais espuma, transparência, entre outras coisas.Estes sabonetes
              industriais também excluem a glicerina de sua composição como
              sobra do processo de saponificação e vendem para a fabricação
            </p>
          </div>

          <h1 className="destaquesh1" id="post2h2">
            Lançamentos
          </h1>
          <p className="pages__line"></p>
          <div className="blog__post1">
            <p className="p__post1">
              Todo sabão é feito da mistura de ácidos graxos (gorduras) e álcali
              (soda cáustica, potassa, ou cinzas), resultando em sais e
              glicerina. Um sabão artesanal em barra bem feito, de fórmula
              equilibrada, bons ingredientes e bom para a pele geralmente possui
              um ph entre 8 e 10. Os sabonetes industrializados, possuem ph
              próximo de 11, o que poderia se considerar como um dos motivos –
              mas não o único – dos sabonetes industrializados irritarem a pele,
              principalmente as sensíveis, os detergentes utilizados nestes
              sabonetes provocam a perda de água das camadas mais profundas da
              pele, proporcionando o ressecamento ou desequilíbrio do PH. Os
              sabonetes industriais possuem vários componentes químicos
              desnecessários, entre os mais comuns estão o lauril éter sulfato
              de sódio e o propilenoglicol, ditos prejudiciais para a pele
              dentro da linha de produtos naturais, são usados para proporcionar
              mais espuma, transparência, entre outras coisas.Estes sabonetes
              industriais também excluem a glicerina de sua composição como
              sobra do processo de saponificação e vendem para a fabricação
            </p>
            <img
              className="img__post1"
              src={X}
              alt="cesta-sabonetes"
              id="lancamentosimg"
            />
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

          <p>~ thinking about seven generations ahead</p>
          <br />
          <p>
            {" "}
            é um paraíso herbal e um cantinho para brujerias. Aqui você encontra
            produtos naturais, artesanais e 100% do processo é feito por
            mulheres, com muita magia e amor.
          </p>
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
