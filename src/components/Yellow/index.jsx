import Header from "../Header";
import Button from "../Button";
import YellowImage from "../../assets/Image/yellow.png"


const Yellow = ({updateFunction}) => {
    const goToHome = ()=> {
        updateFunction(null);
    }
    return (
        <>
        <div className="yellow">
            Yellow is a color that stands for joy and happiness. It also holds a strong connection to creativity and inspiration. 
        </div>
        <Button className="home-button" name="Home" updateFunction={goToHome} />
        <img src={YellowImage} alt="yellow picture" />
        </>
    )
}

export default Yellow;