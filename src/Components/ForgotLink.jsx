import React from "react";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Link } from "react-router-dom";

export default function ForgotLink() {
  return (
    <div className="text-right py-2">
      <Link to="" className="no-underline txt-yellow text-sm font-medium">
        Forgot password?
      </Link>
    </div>
  );
}
