import React, { useState } from "react";
import Modal from "../ServiceModal"
import "./style.css";

function ServiceSection(props) {

    const [show, setShow] = useState(0);

    const openModalHandler = (value => {setShow(value)});

    const closeModalHandler = (value => {setShow(0)});
    
    return(
        <div className="service-section">
            <h1 className="serv-title">Services</h1>
            <div className="service-one">
                <h2 className="serv-title">HOA Management</h2>
                <div className="hoa-manage">
                    <div className="blurb-one">
                        <p>{props.serviceData.blurbOne}</p>
                    </div>
                    <div className="blurb-two">
                        <p>{props.serviceData.blurbTwo}</p>
                        <div className="hoa-bullet-list">
                            <ul className="hoa-bullet-list">
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
                                    <a href={`#${item.modal}`} onClick={() => openModalHandler(item.modal)}>Find out More</a>
                                   
                                </div>
                                <Modal 
                                        item={item} 
                                        show={show === item.modal} 
                                        close={() => closeModalHandler(item.modal)}
                                    />
                                {/* {isOpen ?  */}
                                    {/* <div id={item.modal}  className="modal">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <span className="close"
                                                >&times;</span>
                                                <h2>{item.name}</h2>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <ul>
                                                {item.bullets.map(bullet => <li key={bullet.key}>{bullet.oneBullet}</li>)}
                                            </ul>
                                        </div>
                                    </div> */}
                                {/* : null } */}
                            </div>
                        )
                    })}
                </div> 
            </div>

            <h2 className="serv-title">Other Management Services</h2>
            <div className="other-services">
                {props.serviceData.otherServiceBox.map(item => {
                    console.log("other-service", item);
                    return(
                        <div key={item.key}>
                            <div className="other-service-card">
                                <h3>{item.name}</h3>
                                <a href={`#${item.modal}`} onClick={() => openModalHandler(item.modal)}>Find out More</a>
                               
                            </div>
                            <Modal 
                                    item={item} 
                                    show={show === item.modal} 
                                    close={() => closeModalHandler(item.modal)}
                                />
                            {/* {isOpen ?  */}
                                {/* <div id={item.modal} className="modal">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <span className="close">&times;</span>
                                            <h2>{item.name}</h2>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <ul>
                                            {item.bullets.map(bullet => 
                                                <li key={bullet.key}>{bullet.oneBullet}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div> */}
                            {/* : null } */}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ServiceSection;


// class Product extends Component {
//     state = {
//       showModal: 0
//     };
  
//     getModal = value => {
//       this.setState({ showModal: value });
//     };
  
//     hideModal = value => {
//       this.setState({ showModal: 0 });
//     };
  
//     render() {
//       return (
//         <div className="container">
//           {this.props.data.map((data, key) => (
//             <div key={key} className="small">
//               <p>Namsse: {data.name}</p>
  
//               <button onClick={() => this.getModal(data.id)}>Popup</button>
  
//               <Modal
//                 show={this.state.showModal === data.id}
//                 onHide={() => this.hideModal(data.id)}
//                 name={data.name}
//               />
//             </div>
//           ))}
//         </div>
//       );
//     }
//   }
  
//   export default Product;