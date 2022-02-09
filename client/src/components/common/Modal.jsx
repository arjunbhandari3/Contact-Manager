import React from "react";
import ReactDOM from "react-dom";
import { TiWarningOutline } from "react-icons/ti";
import "../../App.css";

const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div className="modalOverlay" onClick={onDismiss}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <h3 className="modalTitle">
          <TiWarningOutline /> {title}
        </h3>
        <p>{content}</p>
        <div className="modalActions">{actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
