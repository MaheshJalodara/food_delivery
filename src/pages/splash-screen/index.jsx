import React, { useState } from "react";
import "primeflex/primeflex.css";
import SplashScreens from "../../Data/splashScreens";
import Backimg from "../../assets/burgeer_img.png";
import ChangBackimg from "../../assets/change_burgeer_img.png";
import "./splash-screen.css";
import { Link } from "react-router-dom";
import Progressbtn from "../../assets/Progress button.png";
import ArrowIcon from "../../assets/Icon.png";

export default function SplashScreen() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const handleSkip = () => {
    setCurrentIndex(3);
  };
  return (
    <div
      style={{
        backgroundImage:
          currentIndex == 1 ? `url(${Backimg})` : `url(${ChangBackimg})`,
      }}
      className="splash_box_container"
    >
      <div className="grid absolute splash_box">
        <div className="col-12 ">
          {/* <h3>sdfsdfs</h3> */}
          <div className="grid">
            <div className="col-12">
              <h1 className="splash-text fs-32 text-center font-medium line-height-40">
                We serve incomparable delicacies
              </h1>
              <p className="detail_text fs-14 text-center line-height-20 font-light">
                All the best restaurants with their top menu waiting for you,
                they cant’t wait for your order!!
              </p>
            </div>
            <div className="col-12">
              <div className="slider__dots">
                {SplashScreens.map((item, index) => (
                  <a
                    key={index + 1}
                    href="#"
                    className={`slider__dot ${
                      index + 1 === currentIndex ? "active" : " "
                    } `}
                  ></a>
                ))}
              </div>
            </div>
            <div className="col-12">
              {currentIndex < 3 && (
                <div className="grid w-100 mt-7">
                  <div className="col-6">
                    <button
                      type="button"
                      className="no-btn fs-14"
                      onClick={handleSkip}
                    >
                      Skip
                    </button>
                  </div>
                  <div className="col-6 text-right flex align-items-center justify-content-end">
                    <button
                      type="button"
                      className="no-btn fs-14"
                      onClick={handleNext}
                    >
                      Next{" "}
                      <span>
                        <img src={ArrowIcon} alt="arrow_icon" className="w-3" />
                      </span>
                    </button>
                  </div>
                </div>
              )}

              <div className="grid">
                {currentIndex === 3 && (
                  <div className="col-12 text-center pt-3">
                    <Link to="login">
                      <img
                        src={Progressbtn}
                        alt="progress_btn"
                        className="w-4"
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
