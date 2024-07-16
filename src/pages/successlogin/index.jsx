import React, { useState } from "react";
import { Link } from "react-router-dom";
import "primeflex/primeflex.css";
import Backimg from "../../assets/burgeer_img.png";
import Hideimg from "../../assets/Indicator.png";
import SucessImage from "../../assets/Successful_img.png";
import Button from "../../Components/Button";

export default function SuccessLogin() {
  const [active, setActive] = useState({
    active: "fadeindown",
  });
  
  const handlerHidebox = () => {
    if (active.active == "fadeindown") {
      setActive({
        active: "hide fadeoutdown ",
      });
    } else {
      setActive({
        active: "fadeindown",
      });
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Backimg})`,
      }}
      className="splash_box_container"
    >
      <div
        className={`grid absolute sucessdialogBox ${active.active} animation-duration-200`}
      >
        <button
          type="button"
          onClick={handlerHidebox}
          className="no-btn txt-gray text-center m-auto"
        >
          <img src={Hideimg} alt="hidebtn" />
        </button>
        <div className="col-12 context_box">
          {/* <h3>sdfsdfs</h3> */}
          <div className="grid ">
            <div className="col-12 text-center">
              <img
                src={SucessImage}
                alt="sucess-img"
                className=" w-7 mt-4 mb-2"
              />
            </div>
            <div className="col-12">
              <h4 className="txt-black text-2xl text-center mt-0 mb-3">
                Login Successful
              </h4>
            </div>
            <div className="col-12">
              <Link
                to={`/trackscreen/1000/${new Date().getTime()}/1`}
                className="fs-14 p-button p-component p-button-primary no-underline text-center block"
              >
                Go to Tracking Screen
              </Link>
            </div>
            <div className="col-12 text-center">
              <Link
                to="/login"
                className="txt-gray text-sm no-underline font-medium"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
