import { Header, HomeButton, HomeContainer } from "./Home.styled";
import RedberryLogo from "@/assets/images/redberry-logo.png";
import BG from "@/assets/images/home-bg.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header>
                <img src={RedberryLogo} alt="Redberry logo" />
            </Header>
            <HomeContainer>
                <Link to="/add">
                    <HomeButton>რეზიუმეს დამატება</HomeButton>
                </Link>
                <img src={BG} alt="background" />
            </HomeContainer>
        </>
    );
};

export default Home;
