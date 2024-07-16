import React, { useState } from "react";
import Button from "../../Components/Button";
import Heading from "../../Components/Heading";
import PassField from "../../Components/PassField";
import TextField from "../../Components/TextField";
import RegisterLink from "../../Components/RegisterLink";
import { Checkbox } from "primereact/checkbox";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Data/firebase";

export default function Register() {
  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    pass: "",
    name: "",
    agree: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.value]: e.checked,
    });
  };
  const handlerRegister = (e) => {
    e.preventDefault();
    if (formData.email && formData.pass && formData.name && formData.agree) {
      navigator("/login");
    } else {
      navigator("/signup");
    }
  };

  const handlerGoogleRegister = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result.user) {
        navigator("/login");
      }
    });
  };
  return (
    <>
      <div className="grid px-2">
        <div className="col-12 ">
          <Heading
            title="Create your new account"
            headline="Create an account to start looking for the food you like"
          />
        </div>
        <div className="col-12 p-0">
          <form action="" method="post" onSubmit={handlerRegister}>
            <div className="grid">
              <div className="col-12 mb-1">
                <TextField
                  type="email"
                  labelname="Email Address"
                  idname="email"
                  onChange={handleChange}
                  name="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="col-12 mb-1">
                <TextField
                  type="text"
                  labelname="User Name"
                  idname="username"
                  onChange={handleChange}
                  name="name"
                  placeholder="Enter user Name"
                />
              </div>
              <div className="col-12">
                <PassField
                  labelname="Password"
                  idname="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="pass"
                />
              </div>
              <div className="col-12 my-2">
                <div className="flex">
                  <Checkbox
                    inputId="ingredient1"
                    name="agree"
                    value="agree"
                    onChange={handleChange}
                    checked={formData.agree}
                  />

                  <label
                    htmlFor="ingredient1"
                    className="ml-2 text-sm font-medium line-height-20"
                  >
                    I Agree with{" "}
                    <span className="txt-yellow">Tearm of Service</span> and{" "}
                    <span className="txt-yellow">Privacy Policy</span>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <Button btnname="Sign In" />
              </div>
            </div>
            <RegisterLink onClick={handlerGoogleRegister} />
          </form>
        </div>
      </div>
    </>
  );
}
