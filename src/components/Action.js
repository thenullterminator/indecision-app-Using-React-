import React from 'react';

const Action=(props)=>{

    return (
        <div>
            <button disabled={!props.hasOp} onClick={props.pick}>What should I do ?</button>
        </div>
    );
    
};

export default Action;