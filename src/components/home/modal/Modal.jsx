import React from 'react';
import './Modal.css'

const Modal = props => {
  const {showModal, modalRef, infoCustomer, closeModal} = props;
  

  return ( 
    <div onClick={closeModal} ref={modalRef} className={`${showModal} modal-container`}>
      <div className="modal-item">
        <div className="modal-img">
            <img src={`${infoCustomer?.image}`} alt="" />
        </div>
        <div className="modal-infos">
            <h1>Details</h1>
            <div>
             <span>Name: </span>
             <span>{infoCustomer?.name}</span>
            </div>
            <div>
             <span>Email: </span>
             <span>{infoCustomer?.email}</span>
            </div>
            <div>
             <span>Contact: </span>
             <span>{infoCustomer?.phone}</span>
            </div>
            <div className="modal-button">
             <button  onClick={closeModal}>close</button>
            </div>
        </div>
      </div>
    </div>

   );
}
 
export default Modal;