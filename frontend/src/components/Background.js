import backgroundImage from "../assets/images";
const Background = () => {
  return (
    <>
      <div className="background__wrapper">
        <img
          src={backgroundImage}
          alt="background"
          className="background"
        ></img>
      </div>
    </>
  );
};

export default Background;
