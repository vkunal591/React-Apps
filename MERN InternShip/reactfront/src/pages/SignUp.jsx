import React, { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import AuthServices from "../services/authServices";


export default function SignUp() {
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
          <div class="card-header text-center">Sign Up</div>
          <div class="card-body">
            <form  onSubmit={handleSubmit(signUp)}>
              <div class="form-group ">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  {...register('userName')}
                  
                />
                {errors.userName && <p>User Name is required.</p>}
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type={`${showPassword?"text":"password"}`}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  {...register('password')}
                />
                {errors.password && <p>Password is required.</p>}
              </div>
              <button type="submit" class="btn btn-primary mx-auto my-2">
                Submit
              </button>
            </form>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      </div>
    </>
  );
}
