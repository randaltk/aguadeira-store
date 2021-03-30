import "./Instagram.css";
import { Link } from "react-router-dom";
import instaPost1 from "../../assets/images/insta1.jpg";
import instaPost2 from "../../assets/images/sabonete-solar.jpg";
import instaPost3 from "../../assets/images/sabonete-lavanda.jpg";
const Instagram = () => {
  return (
    <>
      <h1 id="insta__h1">@aguadeira.atelier</h1>

      <div className="instagram__wrapper">
        <img className="img__insta" src={instaPost3} alt="instaPost3" />

        <img className="img__insta" src={instaPost2} alt="instaPost2" />

        <img className="img__insta" src={instaPost1} alt="instaPost3" />
      </div>
    </>
  );
};

export default Instagram;
