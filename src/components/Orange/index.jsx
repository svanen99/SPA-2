import Header from "../Header";
import Button from "../Button";
import OrangeImage from "../../assets/Image/orange.png"


const Orange = ({updateFunction}) => {
    const goToHome = () => {
        updateFunction(null)
    }
    return (
        <>
            <div className="orange">
                The color orange is associated with energy and enthusiasm. It is connected to warmth, joy, and creativity.
            </div>
            <Button className="home-Button" name="Home" updateFunction={goToHome} />
            <img src={OrangeImage} alt="orange picture" />
        </>
    )
}

export default Orange;