import React from 'react';
import Modal from 'react-modal';

const Optionmodal=(props)=>{

    return (
        <Modal
        isOpen={!!props.selectedoption}
        contentLabel="SelectedOption"
        ariaHideApp={false}
        >
            <h3>Selected Option</h3>
            {props.selectedoption&&<p>{props.selectedoption}</p>}
            <button onClick={props.handleclosemodal}>Okay</button>
        </Modal>
    );

};

export default Optionmodal;