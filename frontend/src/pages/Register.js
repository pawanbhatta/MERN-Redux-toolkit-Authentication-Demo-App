import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/Auth/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();

  const handleClick = () => {
    navigate("/login");
  };

  const notify = (message = "Login Successful", error = false) => {
    toast(message, { position: "bottom-center" });
  };

  // const registerUser = (user) => {
  //   return axios.post("/user/register", user);
  // };

  const registerHandler = () => {
    if (passwordRef.current?.value !== passwordAgainRef.current?.value) {
      notify("Passwords Must Match", true);
    }

    const user = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    dispatch(register(user));

    navigate("/login", { replace: true });
  };

  console.log("auth in register : ", auth);

  return (
    <Tilt>
      <MainContainer>
        <WelcomeText>Create New Account</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="Name" refer={nameRef} />
          <Input type="text" placeholder="Email" refer={emailRef} />
          <Input type="password" placeholder="Password" refer={passwordRef} />
          <Input
            type="password"
            placeholder="Password Again"
            refer={passwordAgainRef}
          />
        </InputContainer>
        <ButtonContainer>
          <Button handleClick={registerHandler} content="Sign Up"></Button>
        </ButtonContainer>
        <HorizontalRule />

        <ForgotPassword>Already Have Account ?</ForgotPassword>

        <ForgotPassword onClick={handleClick} style={{ marginTop: "20px" }}>
          Sign In
        </ForgotPassword>
      </MainContainer>
      <ToastContainer />
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
  height: 45%;
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

export default Register;
