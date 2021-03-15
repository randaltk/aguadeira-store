import "./Logo.css";
import { Link } from "react-router-dom";

import imageLogo from "../assets/images/AguadeiraLogo.png";
const Logo = () => {
  return (
    <>
      <Link to="/" style={{ cursor: "auto" }}>
        <div className="logo__wrapper">
          <img src={imageLogo} alt="logo" className="logo"></img>
        </div>
      </Link>
    </>
  );
};

export default Logo;
