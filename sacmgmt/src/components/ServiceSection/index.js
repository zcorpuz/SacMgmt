import React, { useState } from "react";
import "./style.css";

function ServiceSection(props) {

    const [isOpen, setIsOpen] = useState(false);

        // show: false

    // showModal = e => {
    //     this.setState({
    //       show: !this.state.show
    //     });
    // };

        // return (
        //     <div>{props.serviceData.blurbOne}</div>
        // )

    return(
        <div className="service-section">
            <h1>Services</h1>
            <div className="service-one">
                <h2 className="serv-title">HOA Management</h2>
                <div className="hoa-manage">
                    <div className="blurb-one">
                        <p>{props.serviceData.blurbOne}</p>
                    </div>
                    <div className="blurb-two">
                        <p>{props.serviceData.blurbTwo}</p>
                        <div className="hoa-bullet-list">
                            <ul>
                                {props.serviceData.hoaBullets.map(hoaItem => <li key={hoaItem.key}>{hoaItem.oneItem}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="hoa-sections">
                    {props.serviceData.homeownerBox.map(item => {
                        return(
                            <div key={item.key}>
                                <div className="hoa-service-card">
                                    <h4>{item.name}</h4>
                                    <a href={`#${item.modal}`} onClick={() =>
                                        {setIsOpen(!isOpen)}}>Find out More</a>
                                </div>
                                {isOpen ? 
                                    <div id={item.modal}  className="modal">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <span className="contact-close">&times;</span>
                                                <h2>{item.name}</h2>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <ul>
                                                {item.bullets.map(bullet => <li key={bullet.key}>{bullet.oneBullet}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                : null }
                            </div>
                        )
                    })}
                </div> 
            </div>

            <h2 className="serv-title">Other Management Services</h2>
            <div className="other-services">
                {props.serviceData.otherServiceBox.map(item => {
                    return(
                        <div key={item.key}>
                            <div>
                                <h3 className="serv-title">{item.name}</h3>
                                <a href={`#${item.modal}`} onClick={() =>
                                    {setIsOpen(!isOpen)}} >Find out More
                                </a>
                            </div>
                            {isOpen ? 
                                <div id={item.modal} className="modal">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <span className="contact-close">&times;</span>
                                            <h2>{item.name}</h2>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <ul>
                                            {item.bullets.map(bullet => <li key={bullet.key}>{bullet.oneBullet}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            : null }
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ServiceSection;