import React, { useState, useEffect, useRef } from "react";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function Toastbox() {
  const [visible, setVisible] = useState(false);
  const toastBC = useRef(null);

  const clear = () => {
    toastBC.current.clear();
    setVisible(false);
  };

  const confirm = () => {
    if (!visible) {
      setVisible(true);
      toastBC.current.clear();
      toastBC.current.show({
        severity: "success",
        summary: "Can you send me the report?",
        sticky: true,
        content: (props) => (
          <div
            className="flex flex-column align-items-left"
            style={{ flex: "1" }}
          >
            <div className="flex align-items-center gap-2">
              <span className="font-bold text-900">Copy Link</span>
            </div>
            <div className="font-medium text-lg my-3 text-900">
              {props.message.summary}
            </div>
          </div>
        ),
      });
    }
  };
  return (
    <div className="card flex justify-content-center">
      <Toast ref={toastBC} position="bottom-center" onRemove={clear} />
      <Button
        onClick={confirm}
        label="Share"
        className="fs-14 p-button p-component p-button-primary no-underline text-center block"
      />
    </div>
  );
}
