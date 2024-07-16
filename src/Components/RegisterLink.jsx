import React from "react";
import { Link } from "react-router-dom";
import GooglIcon from "../assets/GoogleIcon.png";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function RegisterLink(props) {
  return (
    <div className="grid my-2">
      <div className="col-12">
        <h4 className="font-medium text-sm txt-gray text-center linebox relative my-2">
          Or sign in with
        </h4>
      </div>
      <div className="col-12">
        <button
          type="button"
          className="no-btn text-center block m-auto"
          onClick={props.onClick}
        >
          <img src={GooglIcon} alt="" />
        </button>
      </div>
      <div className="col-12 text-center">
        {window.location.pathname === "/login" ? (
          <span className="text-sm txt-black font-semibold">
            Don't have an account?
            <Link
              to="/signup"
              className="no-underline txt-yellow text-sm font-semibold ml-1"
            >
              Register
            </Link>
          </span>
        ) : (
          <span className="text-sm txt-black font-semibold">
            Have an account?
            <Link
              to="/login"
              className="no-underline txt-yellow text-sm font-semibold ml-1"
            >
              Login
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}
