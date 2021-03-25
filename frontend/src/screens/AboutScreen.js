import "./AboutScreen.css";
import Matinho from "../assets/images/About/matinho.png";
import Maozinha from "../assets/images/About/maozinha.png";

// import Mandala from "../assets/images/About/mandala.PNG";
// import Coelho from "../assets/images/About/coelin.PNG";
// import Folhas from "../assets/images/About/folhas.PNG";

const AboutScreen = () => {
  return (
    <>
      <div className="about__wrapper">
        <h1 className="about__h1">Sobre a Marca</h1>
        <p className="about__dots">••••••••</p>
        <h1 className="matinho__h1">Natural</h1>
        <div className="matinho__wrapper">
          <img className="matinho__img" alt="matinho" src={Matinho}></img>
          <p className="matinho__desc">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi
            purus, tempor eget vestibulum facilisis, volutpat sed dolor. Vivamus
            felis justo, ornare vel ornare pellentesque, interdum id est. Mauris
            elementum sem quis tortor iaculis, sit amet pretium dolor interdum.
            Pellentesque iaculis sed nibh vel vestibulum. Vestibulum gravida
            egestas sapien ut vestibulum. Nam a rhoncus arcu. Aliquam euismod,
            odio semper faucibus volutpat, risus nulla laoreet est, quis lacinia
            enim ex efficitur lorem. Donec ut consectetur est. Pellentesque non
            dignissim nibh. Nam vulputate consectetur quam sit amet condimentum.
            Proin interdum lectus at luctus congue.
          </p>
        </div>
        <h1 className="maozinha__h1">Artesanal</h1>
        <div className="maozinha__wrapper">
          <p className="maozinha__desc">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi
            purus, tempor eget vestibulum facilisis, volutpat sed dolor. Vivamus
            felis justo, ornare vel ornare pellentesque, interdum id est. Mauris
            elementum sem quis tortor iaculis, sit amet pretium dolor interdum.
            Pellentesque iaculis sed nibh vel vestibulum. Vestibulum gravida
            egestas sapien ut vestibulum. Nam a rhoncus arcu. Aliquam euismod,
            odio semper faucibus volutpat, risus nulla laoreet est, quis lacinia
            enim ex efficitur lorem. Donec ut consectetur est. Pellentesque non
            dignissim nibh. Nam vulputate consectetur quam sit amet condimentum.
            Proin interdum lectus at luctus congue.
          </p>
          <img className="maozinha__img" alt="maozinha" src={Maozinha}></img>
        </div>

      
      </div>
    </>
  );
};
export default AboutScreen;
