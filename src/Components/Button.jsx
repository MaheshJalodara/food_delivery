import React, { useState } from "react";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function BasicDemo(props) {
  return (
    <div className="card flex justify-content-center">
      <Button
        label={props.btnname}
        severity="primary"
        type={props.btntype}
        className="fs-14"
      />
    </div>
  );
}
