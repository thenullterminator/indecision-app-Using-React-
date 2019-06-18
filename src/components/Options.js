import React from 'react'
import Option from './Option'
const Options=(props)=> (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">{(props.options.length>0)?'Here are your options:':'No options'}</h3>
            <button className="small-button--link" onClick={props.handleremoveall}>Remove All</button>
        </div>
       
        {props.options.length==0 && <p className="widget__message">Please add an option to get started !</p>}
        {props.options.map((op,index)=><Option  count={index+1} handleremovesingle={props.handleremovesingle} key={op} optxt={op}/>)}
    </div>
);


export default Options;