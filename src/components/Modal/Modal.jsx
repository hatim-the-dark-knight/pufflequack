import React from "react";
import './Modal.css'

const Modal = (props) => {
const message = props.message;

    if(!props.showModal) {
        return null;
    }
    return(
        <div className="modal">
            <div className="m-content">
                <div className="m-header">
                    <h4 className="modal-title">
                        Success
                    </h4>
                </div>
                <div className="modal-body">
                    {message}
                </div>
                <div className="m-footer">
                    <button onClick={props.onClose} className="btn btn-secondary">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal