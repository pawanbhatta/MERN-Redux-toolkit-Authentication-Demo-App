import styled from "styled-components";

const Button = ({ content, handleClick }) => {
  return <StyledButton onClick={handleClick}>{content}</StyledButton>;
};

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export default Button;

// Admin:
// username - admin33
// pswd - Asdf@123

// User:
// username - user44
// pswd - Asdf@123

// Parent:
// username - parent
// pswd - Asdf@123

// Teacher:
// username - teacher
// pswd - Asdf@123
