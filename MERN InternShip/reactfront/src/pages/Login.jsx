import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import AuthServices from "../services/authServices";


export default function Login() {
  const navigate = useNavigate();
  const [generalError, setGeneralError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const validationSchema = Yup.object({
    username: Yup.string()
      .test(
        "username-validation",
        "Invalid email or mobile number",
        function (value) {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          const mobileRegex = /^[0-9]{10}$/;
          return emailRegex.test(value || "") || mobileRegex.test(value || "");
        }
      )
      .required("Required"),
    password: Yup.string().required("Required")
  });

  const login = async (values) => {
    try {
      const response = await AuthServices.login(values);
      console.log(response.data.success)
      if (response.data.success) {
        localStorage.setItem("token", "demo-data");
       
        navigate("/"); // Redirect to homepage
      } else {
        setGeneralError("Login failed. Please try again.");
      }
    } catch (err) {
      setGeneralError("Login failed. Please check your credentials.");
    }
  };

  const signUp = async (values) => {
    try {
      const response = await AuthServices.signup(values);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem(
          "childDropDownEnable",
          JSON.stringify(response.data.data.childDropDownEnable)
        );
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response.data.data.user)
        );
        navigate("/"); // Redirect to homepage
      } else {
        setGeneralError("Login failed. Please try again.");
      }
    } catch (err) {
      setGeneralError("Login failed. Please check your credentials.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container" style={{ marginTop: "12rem" }}>
        <div class="card text-left col-3 m-auto my-5">
          <div class="card-header text-center">Log In</div>
          <div class="card-body">
            <form  onSubmit={handleSubmit(login)}>
              <div class="form-group ">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  {...register('username')}
                  
                />
                {errors.userName && <p>User Name is required.</p>}
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  {...register('password')}
                />
                {errors.password && <p>Password is required.</p>}
              </div>
              <div className="d-flex justify-item-center w-75 mx-auto">

              <button type="submit" class="btn btn-primary w-50 mx-2 my-2">
                Log in
              </button>
              <Link to="signup" type="submit" class="btn btn-success w-50 mx-2 my-2">
                Sign Up
              </Link>
              </div>
            </form>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      </div>
    </>
  );
}
