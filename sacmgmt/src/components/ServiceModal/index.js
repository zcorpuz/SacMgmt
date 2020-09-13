import React from "react";
// import  serviceData from "../../serviceData"
import "./style.css"

function Modal({ show, close, item}) {
    // console.log("alldata", item);

    return (
        <div id={item.modal} className="modal-wrapper" 
            style={{
                opacity: show ? "1" : "0",
                display: show ? "block" : "none",
            }}>

            <div className="modal-header">
                <p>{item.name}</p>
                <span onClick={close} className="close-modal-btn">x</span>

            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <ul>
                        {item.bullets.map(bullet => <li key={bullet.key}>{bullet.oneBullet}</li>)}
                    </ul>
                </div>
                {/* <div className="modal-footer">
                    <button className="btn-cancel" onClick={close}>Close</button>
                </div> */}
            </div>
        </div>
    )
}

export default Modal;



// class Modal extends Component {
//     render() {
//       console.log(this.props.show);
//       return (


//         <React.Fragment>
//           {this.props.show && (
//             <div className="modal">
//               <h1>{this.props.name}</h1>
//               <button onClick={this.props.onHide}>Close Modal</button>
//             </div>
//           )}
//         </React.Fragment>
//       );
//     }
//   }
  