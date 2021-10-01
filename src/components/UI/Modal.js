import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-gray-950"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = props => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-4 rounded-2xl shadow-md z-30 md:w-[40rem] md:left-[calc(50%-20rem)] animate-slide-down">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
