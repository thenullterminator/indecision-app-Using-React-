import React from 'react'
import Option from './Option'
const Options=(props)=> (
    <div>
        <button onClick={props.handleremoveall}>Remove All</button>
        <p></p>
        {(props.options.length>0)?'Here are your options:':'No options'}
        {props.options.map((op)=><Option handleremovesingle={props.handleremovesingle} key={op} optxt={op}/>)}
    </div>
);


export default Options;