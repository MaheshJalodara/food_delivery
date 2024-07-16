import React, { useState } from "react";
import { Password } from "primereact/password";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function PassField(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <label
        htmlFor={props.idname}
        className="text-sm txt-black font-medium mb-2 block"
      >
        {props.labelname}
      </label>
      <Password
        value={props.value}
        name={props.name}
        type={props.type}
        id={props.idname}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
        autoComplete="off"
      />
    </>
  );
}
