import React from 'react';
const Option=(props)=>{

    return (
        <div>
        <p>{props.optxt}
        <button onClick={(e)=>{
            props.handleremovesingle(props.optxt);
        }}>Remove</button>
        </p>
        </div>
       );

};

export default Option;