import React from 'react';
const Option=(props)=>(
    <div className="option">
        <p className="option__text">{props.count}. {props.optxt}</p>
        <button className="small-button small-button--link"  onClick={(e)=>{
            props.handleremovesingle(props.optxt);
        }}>Remove</button>
    </div>
    );



export default Option;