import "./About.css";
import Maozinha from "../assets/images/About/maozinha.PNG";
import Matinho from "../assets/images/About/matinho.PNG";
import Mandala from "../assets/images/About/mandala.PNG";
import Coelho from "../assets/images/About/coelin.PNG";
import Folhas from "../assets/images/About/folhas.PNG";

const AboutScreen = () => {
  return (
    <>
      <div className="about__wrapper">
        <h1 className="about__h1">Conheça...</h1>
        <div className="grid__container">
          <img className="grid__img" alt="maozinha" src={Maozinha}></img>

          <p className="grid__desc">
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
            Proin interdum lectus at luctus congue.{" "}
          </p>

          <p className="grid__desc">
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

          <img className="grid__img" alt="matinho" src={Matinho}></img>

          <img className="grid__img" alt="mandala" src={Mandala}></img>

          <p className="grid__desc">
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
            Proin interdum lectus at luctus congue.{" "}
          </p>

          <p className="grid__desc">
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

          <img className="grid__img" alt="coelin" src={Coelho}></img>

          <img className="grid__img" alt="folhas" src={Folhas}></img>

          <p className="grid__desc">
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
            Proin interdum lectus at luctus congue.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutScreen;
