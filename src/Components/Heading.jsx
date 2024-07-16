import React from "react";
import "primeflex/primeflex.css";

export default function Heading(props) {
  return (
    <div className="headding_box">
      <h1 className="title font-semibold fs-32 line-heigh_40 mb-1 txt-black">
        {props.title}
      </h1>
      <p className="headline text-sm txt-gray font-medium mt-2">
        {props.headline}
      </p>
    </div>
  );
}
