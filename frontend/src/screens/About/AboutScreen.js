// IMAGES
import Matinho from "../../assets/images/matinho.png";
import Maozinha from "../../assets/images/maozinha.png";
import Coelho from "../../assets/images/Coelho.png";
import Folhas from "../../assets/images/Folhas.png";
import Mandala from "../../assets/images/Mandala.png";
//CSS
import "./AboutScreen.css";

//Components
import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer2/Footer2";

const AboutScreen = () => {
  return (
    <>
      <div className="about__wrapper">
        <h1 className="about__h1">Sobre a Marca</h1>
        <p className="pages__line"></p>
        <h1 className="matinho__h1">Natural</h1>
        <div className="matinho__wrapper">
          <img className="matinho__img" alt="matinho" src={Matinho}></img>
          <p className="matinho__desc">
            A natureza já proporciona muito do que precisamos pra ficar bem. Ao
            dizermos que um cosmético é natural, dentre outras coisas estamos
            dizendo que seus ingredientes foram obtidos a partir de
            matérias-primas já disponíveis na natureza, como os óleos e
            manteigas vegetais prensados a frio que são extraídos sem grandes
            processamentos e sem adição de substâncias. Alguns sintéticos são
            permitidos dentro da cosmética natural, mas apenas aqueles que não
            geram acumulação de toxinas no nosso organismo ou no organismo da
            Terra.
          </p>
        </div>
        <h1 className="maozinha__h1">Artesanal</h1>
        <div className="maozinha__wrapper">
          <p className="maozinha__desc">
            Os cosméticos naturais da aguadeira possuem o poder das plantas e
            são feitos à mão com amor e dedicação. São alquimias mágicas e
            únicas! Ao comprar de pequenos produtores de cosméticos naturais
            você não só está ajudando sonhos a se realizarem, como também
            desestimula grandes empresas a continuarem a produzir cosméticos
            poluentes e prejudiciais à saúde.
          </p>
          <img className="maozinha__img" alt="maozinha" src={Maozinha}></img>
        </div>

        <h1 className="matinho__h1">
          Sem ingredientes de origem animal & Sem testes em animais
        </h1>
        <div className="matinho__wrapper">
          <img className="matinho__img" alt="matinho" src={Coelho}></img>
          <p className="matinho__desc">
            Animais têm direitos. Merecem liberdade, respeito e, sempre que
            possível, muito carinho! Os cosméticos naturais da Aguadeira não são
            feitos com nenhum ingrediente de origem animal ou que seja testado
            em animais.
          </p>
        </div>

        <h1 className="maozinha__h1">Biodegradável Reciclável Reutilizável </h1>
        <div className="maozinha__wrapper">
          <p className="maozinha__desc">
            Os cosméticos naturais da aguadeira possuem o poder das plantas e
            são feitos à mão com amor e dedicação. São alquimias mágicas e
            únicas! Ao comprar de pequenos produtores de cosméticos naturais
            você não só está ajudando sonhos a se realizarem, como também
            desestimula grandes empresas a continuarem a produzir cosméticos
            poluentes e prejudiciais à saúde.
          </p>
          <img className="maozinha__img" alt="maozinha" src={Folhas}></img>
        </div>

        <h1 className="matinho__h1">Terapêutico</h1>
        <div className="matinho__wrapper">
          <img className="matinho__img" alt="matinho" src={Mandala}></img>
          <p className="matinho__desc">
            Os cosméticos naturais da Aguadeira têm feitios regados de amor e de
            boas intenções. Seus ingredientes são combinados visando criar
            produtos terapêuticos, ou seja, produtos que cuidam do nosso corpo,
            da nossa mente e das nossas emoções.
          </p>
        </div>
        <Footer2 />
        <Footer />
      </div>
    </>
  );
};
export default AboutScreen;
