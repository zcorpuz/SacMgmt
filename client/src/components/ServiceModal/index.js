import React from "react";
import { createPortal } from "react-dom";
import "./style.css"

function Modal({ show, close, item}) {

    return (
        createPortal( 
            <div id={item.modal} className="modal-wrapper" 
                style={{
                    opacity: show ? "1" : "0",
                    display: show ? "block" : "none",
                    // minHeight: show ? "100%" : "0%"
                }}
            >
                {/* <div className="inner"> */}

                    <div className="modal-header-box">
                        <p>{item.name}</p>
                        <span onClick={close} className="close-modal-btn">x</span>

                    </div>
                    <div className="modal-content-box">
                        <div className="modal-info">
                            <ul className="service-bullet">
                                {item.bullets.map(bullet => <li key={bullet.key} >{bullet.oneBullet}</li>)}
                            </ul>
                        </div>
                    </div>
                {/* </div> */}
            </div>, document.body
        )
    )   
}

export default Modal;