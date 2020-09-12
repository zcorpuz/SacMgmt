import React, { Component } from "react";
// import {
//   interaction, layer, custom, control, //name spaces
//   Interactions, Overlays, Controls,     //group
//   Map, Layers, Overlay, Util    //objects
// } from "react-openlayers";

export class Contact extends Component {

  render() {
    // const ol = require('openlayers');
    // const map = new ol.Map({
    //   target: 'map',
    //   layers: [
    //       new ol.layer.Tile({
    //       source: new ol.source.OSM()
    //       })
    //   ],
    //   view: new ol.View({
    //       center: ol.proj.fromLonLat([-118.478890, 34.155240]),
    //       zoom: 16
    //   })
    // });
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-6">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
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
                </form>
              </div>
            </div>
            {/* <div className="col-md-3 map" id="map"></div> */}
            {/* <Map view={{center: [0, 0], zoom: 2}}>
              <Layers>
                <layer.Tile/>
                {/* <layer.Vector source={markers} style={markers.style} zIndex="1" /> */}
              {/* </Layers>
              <Overlays>
                <Overlay 
                  ref={comp => this.overlayComp = comp}
                  element="#popup" />
              </Overlays>
              <Controls attribution={false} zoom={true}>
                <control.Rotate />
                <control.ScaleLine />
                <control.FullScreen />
                <control.OverviewMap />
                <control.ZoomSlider />
                <control.ZoomToExtent />
                <control.Zoom />
              </Controls> */}
              {/* <Interactions>
                <interaction.Select style={selectedMarkerStyle} />
                <interaction.Draw source={markers} type='Point' />
                <interaction.Modify features={markers.features} />
              </Interactions> */}
            {/* </Map> */}
            <div className="col-md-2 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>  Address:
                  </span>
                   2701 Cottage Way, Suite 9 Sacramento, CA 95825
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>Phone:
                  </span>
                  (916) 974-0147
                </p>
                <p>
                  <span>
                    <i className="fa fa-fax"></i>Fax:
                  </span>
                  (916) 974-0174
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope"></i>Email:
                  </span>
                  info@sacmgmt.net
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
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