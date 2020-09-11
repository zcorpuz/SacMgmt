import React, { Component } from "react";

export default class Porfolio extends Component {
    state = {
        show: false
      };
    
    showModal = e => {
        this.setState({
          show: !this.state.show
        });
    };
    
    render() {
        let serviceData = this.props.serviceData;
        return(
            <div className="service-section">
                <h1>Services</h1>
                <div className="service-one">
                    <h2>HOA Management</h2>
                    <div>
                        <div className="blurb-one">
                            <p>{serviceData.blurbOne}</p>
                        </div>
                        <div className="blurb-two">
                            <p>{serviceData.blurbTwo}</p>
                            <div className="hoa-bullet-list">
                                <ul>
                                    {serviceData.hoaBullets.map(hoaItem =>   <li key={hoaItem.key}>{hoaItem.oneItem}</li>)}
                                </ul>
                            </div>
                        </div>

                        <div className="hoa-sections">
                            {serviceData.homeownerBox.map(item => {
                                return(
                                    <div key={item.key}>
                                        <h4>{item.name}</h4>
                                        <ul>
                                            {item.bullets.map(bullet =>  <li key={bullet.key}>{bullet.oneBullet}</li>)}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div> 
                    </div>
                </div>
                <h2>Other Management Services</h2>
                <div className="other-services">
                    {serviceData.otherServiceBox.map(item => {
                        return(
                            <div key={item.key}>
                                <h3>{item.name}</h3>
                                <ul>
                                    {item.bullets.map(bullet => {
                                        return(
                                            <li key={bullet.key}>{bullet.oneBullet}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }    
}

