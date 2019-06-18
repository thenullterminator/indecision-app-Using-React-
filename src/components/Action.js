import React from 'react';

const Action=(props)=>(
    <div>
        <button className="big-button" disabled={!props.hasOp} onClick={props.pick}>What should I do ?</button>
    </div>
);

export default Action;