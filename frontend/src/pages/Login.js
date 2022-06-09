import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const facebookBackground =
    "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";

  const instagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";

  const twitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <Tilt>
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Button content="Sign Up" />
        </ButtonContainer>
        <LoginWith>or Login With</LoginWith>
        <HorizontalRule />
        <IconContainer>
          <Icon color={facebookBackground}>
            <FaFacebookF />
          </Icon>
          <Icon color={instagramBackground}>
            <FaInstagram />
          </Icon>
          <Icon color={twitterBackground}>
            <FaTwitter />
          </Icon>
        </IconContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
        <ForgotPassword style={{ marginTop: "10px", cursor: "auto" }}>
          Or,{" "}
        </ForgotPassword>
        <ForgotPassword onClick={handleClick} style={{ marginTop: "10px" }}>
          Sign Up
        </ForgotPassword>
      </MainContainer>
    </Tilt>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;

    h4 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }

  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }

  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5em 0 1em 0;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  backdrop-filter: blur(25px);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0 1.5rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Login;
