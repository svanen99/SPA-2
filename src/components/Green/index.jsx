import Header from "../Header";
import Button from "../Button";
import GreenImage from "../../assets/Image/green.png"

const Green = ({ updateFunction }) => {
  const goToHome = () => {
    updateFunction(null);
  };

  return (
    <>
      <div className="green">
        The color green stands for hope and normally means that there is a new beginning. Green also connects with your health and success in life. 
      </div>
      <Button className="home-button" name="Home" updateFunction={goToHome} />
      <img src={GreenImage} alt="green picture" />
  
    </>
  );
};

export default Green;
