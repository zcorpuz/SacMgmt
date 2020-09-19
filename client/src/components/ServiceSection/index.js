import React, { useState } from "react";
import Modal from "../ServiceModal"
import "./style.css";

function ServiceSection(props) {

    const [show, setShow] = useState(0);

    const openModalHandler = (value => {setShow(value)});

    const closeModalHandler = (value => {setShow(0)});
    
    return(
        <div className="service-section">
            <h1 className="serv-title" id="main-service-title">Services</h1>
            <div className="service-one">
                <h2 className="serv-title">HOA Management</h2>
                <div className="hoa-manage">
                    <div className="blurb-one">
                        <p>{props.serviceData.blurbOne}</p>
                    </div>
                    <div className="blurb-two">
                        <p>{props.serviceData.blurbTwo}</p>
                        <div>
                            <ul className="hoa-bullet-list">
                                {props.serviceData.hoaBullets.map(hoaItem => <li key={hoaItem.key}>{hoaItem.oneItem}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="hoa-sections">
                    {props.serviceData.homeownerBox.map(item => {
                        return(
                            <div key={item.key} className="service-pop">
                                <div className="hoa-service-card">
                                    <h4>{item.name}</h4>
                                    <a href={`#${item.modal}`} onClick={() => openModalHandler(item.modal)}>Find out More</a>
                                </div>
                                <Modal item={item} show={show === item.modal} close={() => closeModalHandler(item.modal)}/>
                            </div>
                        )
                    })}
                </div> 
            </div>

            <h2 className="serv-title" id="other-serv-title">Other Management Services</h2>
            <div className="other-services">
                {props.serviceData.otherServiceBox.map(item => {
                    return(
                        <div key={item.key} className="service-pop">
                            <div className="other-service-card">
                                <h3>{item.name}</h3>
                                <a href={`#${item.modal}`} onClick={() => openModalHandler(item.modal)}>Find out More</a>
                            </div>
                            <Modal item={item} show={show === item.modal} close={() => closeModalHandler(item.modal)} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ServiceSection;