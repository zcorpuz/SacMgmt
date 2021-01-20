import React, { Component } from "react";
import Map from "../Map";
// import axios from 'axios'

import "./style.css";

class Contact extends Component {
  // constructor(props) {
  //   super(props)

	// 	this.state = {
	// 		name: '',
	// 		email: '',
	// 		message: ''
	// 	}
	// }

	// changeHandler = e => {
	// 	this.setState({ [e.target.name]: e.target.value })
	// }

	// submitHandler = e => {
	// 	e.preventDefault()
	// 	axios
  //   .post('http://localhost:3001/api/contact', this.state)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
	// }

  render() {
    // const { name, email, message } = this.state;

    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                {/* <div className="row"> */}
                  {/* <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p>
                      Please fill out the form below to send us an email and we
                      will get back to you as soon as possible.
                    </p>
                  </div> */}
                  {/* <form onSubmit={this.submitHandler}
                  name="sentMessage" id="contactForm" noValidate>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={this.changeHandler}
                            placeholder="Name"
                            required="required"
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                            placeholder="Email"
                            required="required"
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        name="message"
                        value={message}
                        onChange={this.changeHandler}
                        rows="4"
                        placeholder="Message"
                        required
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-custom btn-lg">
                      Send Message
                    </button>
                  </form> */}
                {/* </div> */}
              </div>
              <div className="col-md-4 contact-info">
                <div className="contact-item">
                  <h3>Contact Info</h3>
                  <p>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>    Address:
                    </span>
                    2701 Cottage Way, Suite 9 <br />
                    Sacramento, CA 95825
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone:
                    </span>
                    (916) 974-0147
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-fax"></i> Fax:
                    </span>
                    (916) 974-0174
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope"></i> Email:
                    </span>
                    info@sacmgmt.net
                  </p>
                </div>
              </div>
              <div className="col-md-4 contact-info">
                <Map />
              </div>
            </div>
            {/* Social Media Links */}
            <div className="col-md-12">
              <div className="row text-center">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/sacmgmt" target="_blank" rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/sacmgmt" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 Sacramento Management Company, Inc. Design by 
              <a href="https://github.com/mairagee524"> Maira Garcia, </a>
              <a href="https://github.com/Caroaldana">Carolina Aldana, </a> 
              <a href="https://github.com/cjpia612">CJ Pia, </a> and 
              <a href="https://github.com/zcorpuz"> Zach Corpuz</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;