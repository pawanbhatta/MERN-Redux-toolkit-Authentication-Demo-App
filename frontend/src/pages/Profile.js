import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { logout } from "../features/Auth/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ color: "white", fontSize: "24px" }}>
      <h1>Profile</h1>
      <h3>Name : {user.name} </h3>
      <h3>Email : {user.email} </h3>
      <Button content="Logout" handleClick={logoutHandler}></Button>
    </div>
  );
};

export default Profile;
