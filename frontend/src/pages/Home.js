import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { logout } from "../features/Auth/authSlice";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  console.log("user in home from storage", user);
  return (
    <div style={{ color: "white", fontSize: "24px" }}>
      <h1>Home</h1>
      <h3>Name : {user?.name} </h3>
      <h3>Email : {user?.email} </h3>
      <Button content="Logout" handleClick={logoutHandler}></Button>
    </div>
  );
};

export default Home;
