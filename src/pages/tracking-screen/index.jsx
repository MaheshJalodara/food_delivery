import React, { useState, useEffect } from "react";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Slider } from "primereact/slider";
import ToastBox from "../../Components/ToastBox";

export default function SuccessLogin() {
  const [value, setValue] = useState(50);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondsStyle = {
    transform: `rotate(${time.getSeconds() * -6}deg)`,
  };

  const minutesStyle = {
    transform: `rotate(${time.getMinutes() * -6 + time.getSeconds() * 0.1}deg)`,
  };

  const hoursStyle = {
    transform: `rotate(${time.getHours() * -30 + time.getMinutes() * 0.5}deg)`,
  };

  return (
    <div className="py-8 px-3">
      <div className={`grid `}>
        <div className="col-12 mb-4">
          <h4 className="txt-black text-2xl text-center mt-0 mb-3">
            Tracking your order
          </h4>
        </div>
        <div className="col-12 text-center mb-4">
          <div className="clock">
            <div className="hour-hand" style={hoursStyle} />
            <div className="minute-hand" style={minutesStyle} />
            <div className="second-hand" style={secondsStyle} />
            <div className="center-dot" />
            <span className="twelve">12</span>
            <span className="one">1</span>
            <span className="two">2</span>
            <span className="three">3</span>
            <span className="four">4</span>
            <span className="five">5</span>
            <span className="six">6</span>
            <span className="seven">7</span>
            <span className="eight">8</span>
            <span className="nine">9</span>
            <span className="ten">10</span>
            <span className="eleven">11</span>
          </div>
        </div>
        <div className="col-12 text-center">
          <div className="w-14rem m-auto">
            <Slider
              value={value}
              onChange={(e) => setValue(e.value)}
              className="w-full"
            />
          </div>
        </div>
        <div className="col-12 mt-5">
          <ToastBox />
        </div>
      </div>
    </div>
  );
}
