import React from "react";
import "./style.css"

function Modal({ show, close, item}) {

    return (
        <div id={item.modal} className="modal-wrapper" 
            style={{
                opacity: show ? "1" : "0",
                display: show ? "block" : "none",
            }}>

            <div className="modal-header-box">
                <p>{item.name}</p>
                <span onClick={close} className="close-modal-btn">x</span>

            </div>
            <div className="modal-content-box">
                <div className="modal-body">
                    <ul>
                        {item.bullets.map(bullet => <li key={bullet.key}>{bullet.oneBullet}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Modal;