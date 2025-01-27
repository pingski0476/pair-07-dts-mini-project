import React from "react";
import { Search } from "@mui/icons-material";
import "./Navbar.css";
import logo from "./image 3.png";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, logoutUser } from "../../config/firebase";
import { Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const navi = useNavigate();

  const [user] = useAuthState(auth);

  const logoutHandler = async () => {
    await logoutUser();
    navi("/login");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={logo} alt=""></img>
          <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </NavLink>
          <NavLink
            to="/movies"
            style={{ color: "white", textDecoration: "none" }}
          >
            Movies
          </NavLink>
          <NavLink
            to="/series"
            style={{ color: "white", textDecoration: "none" }}
          >
            Series
          </NavLink>
        </div>
        <div className="right">
          <Search />
          {/* <UserLog/> */}
          <Button
            onClick={logoutHandler}
            variant="text"
            sx={{ color: "white" }}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
