import React from 'react';
import Modal from 'react-modal';

const Optionmodal=(props)=>(
    <Modal
    isOpen={!!props.selectedoption}
    contentLabel="SelectedOption"
    ariaHideApp={false}
    onRequestClose={props.handleclosemodal}
    closeTimeoutMS={200}
    className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedoption&&<p className="modal__body">{props.selectedoption}</p>}
        <button className="small-button" onClick={props.handleclosemodal}>Okay</button>
    </Modal>
);

export default Optionmodal;