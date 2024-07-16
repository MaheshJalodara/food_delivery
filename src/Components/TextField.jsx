import React from "react";
import { InputText } from "primereact/inputtext";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function TextField(props) {
  return (
    <div>
      <label
        htmlFor={props.idname}
        className="text-sm txt-black font-medium mb-2 block"
      >
        {props.labelname}
      </label>
      <InputText
        value={props.value}
        name={props.name}
        type={props.type}
        id={props.idname}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
        autoComplete="off"
      />
    </div>
  );
}
