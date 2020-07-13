import React from "react";
import "./DialogBox.css";

const DialogBox = React.forwardRef((props, ref) => {
  return (
    <>
      {props.show && (
        <div ref={ref} className="backdrop modal-style">
          <div className="modal-main card border-primary mb-3">
            <div className="text-light bg-primary p-2 pb-2">
              {props.header ? props.header : "Header"}
            </div>
            <div className="m-2">{props.children}</div>
            <div className="dialog-footer">
              <button onClick={props.onSave} className="btn btn-primary mr-2">
                {props.saveLabel ? props.saveLabel : "Save"}
              </button>
              <button onClick={props.onClose} className="btn btn-danger">
                {props.closeLabel ? props.closeLabel : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default DialogBox;
