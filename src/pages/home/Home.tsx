import {
    Header,
    HomeButton,
    HomeButtonLogo,
    HomeContainer,
} from "./Home.styled";
import RedberryLogo from "@/assets/images/redberry-logo.png";
import BG from "@/assets/images/home-bg.jpg";
import { Link } from "react-router-dom";
import HomeLogo from "@/assets/images/home-logo.png";

const Home = () => {
    return (
        <>
            <Header>
                <img src={RedberryLogo} alt="Redberry logo" />
            </Header>
            <HomeContainer>
                <Link to="/add/1">
                    <HomeButton>რეზიუმეს დამატება</HomeButton>
                </Link>
                <img src={BG} className="homebg" alt="background" />
                <HomeButtonLogo src={HomeLogo} />
            </HomeContainer>
        </>
    );
};

export default Home;
