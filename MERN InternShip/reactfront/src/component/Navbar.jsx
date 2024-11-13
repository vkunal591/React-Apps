import React from "react";
import logo from "../../src/logo.svg";
import authServices from "../services/authServices";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    authServices.logout();
    console.log("test");
    navigate("/login");
  };
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" width="30" height="24" />
        </a>

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="employeeList">
              Employee List
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="createEmployee">
              Create Employee
            </Link>
          </li>
        </ul>
      </div>

      <button className="btn btn-danger mx-2" onClick={logout}>
        Log Out
      </button>
    </nav>
  );
}
