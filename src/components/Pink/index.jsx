import Header from "../Header";
import Button from "../Button";
import PinkImage from "../../assets/Image/pink.png"


const Pink = ({ updateFunction }) => {
  const goToHome = () => {
    updateFunction(null);
  }

  return (
    <>
        <div className="pink">
            The color pink is mostly associated with romance and love. This color is connected with femininity, comfort, and sweetness. It's also considered as the superior color, by me.        
        </div>
      <Button className="home-button" name="Home" updateFunction={goToHome} />
      <img src={PinkImage} alt="pink picture" />
    </>
  );
};

export default Pink;

