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

        console.log(serviceData);
        return(
            <div className="service-section">
                <h1>Services</h1>
                <div className="service-one">
                    <h3>HOA Management</h3>
                    <div>
                        <div className="blurb-one">
                            <p>Sacramento Management Co. Inc., specializes in providing personalized financial and property management services for homeowners associations. We work closely with associations to determine how we can meet your needs by providing personal service, attention to detail, and a commitment to your community. Our thorough monthly financial services, including full accounting reports, banking services and delinquency management, help you serve your community with an organized, accountable approach. Our primary objective is to assist the Board of Directors in managing your association in order to protect the investment of the association members, and to achieve the goals of the association in the most effective manner possible. Our primary objective is to assist the Board of Directors in managing your association in order to protect the investment of the association members, and to achieve the goals of the association in the most effective manner possible.</p>
                        </div>
                        <div className="blurb-two">
                            <p>Homeowners that become board members often lack the qualification and experience to enforce the covenants, conditions, and restrictions (CC&R's) of their associations. We take pride in the fact that we respond promptly and courteously to the requests of the association residents. We are on call 24 hours a day in order to meet the emergency needs of your association.</p>
                            <div className="hoa-bullet-list">
                                <ul>
                                    <li>Schedule, coordinate and attend board meetings.</li>
                                    <li>New homeowner packages.</li>
                                    <li>Supervising and monitoring contractors.</li>
                                    <li>Monthly inspections.</li>
                                    <li>Annual budget preparation.</li>
                                    <li>24 hours a day, seven days a week emergency services.</li>
                                    <li>Enforce the Association CC&R provisions, policies, and rules and regulations.</li>
                                    <li>Interface with governmental agencies, attorneys, CPAs, and vendors.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="hoa-sections">
                            {serviceData.homeownerBox.map(item => {
                                return(
                                    <div key={item.key}>
                                        <p>{item.name}</p>
                                        <ul>
                                            {item.bullets.map(bullet =>  <li key={bullet.key}>{bullet.oneBullet}</li>)}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div> 
                    </div>
                </div>
                <h3>Other Services</h3>
                <div className="other-services">
                    {serviceData.otherServiceBox.map(item => {
                        return(
                            <div key={item.key}>
                                <p>{item.name}</p>
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

