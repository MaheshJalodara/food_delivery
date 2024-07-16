import React, { useEffect, useState } from "react";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondsStyle = {
    transform: `rotate(${time.getSeconds() * 6}deg)`,
  };

  const minutesStyle = {
    transform: `rotate(${time.getMinutes() * 6 + time.getSeconds() * 0.1}deg)`,
  };

  const hoursStyle = {
    transform: `rotate(${time.getHours() * 30 + time.getMinutes() * 0.5}deg)`,
  };
  return (
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
  );
}
