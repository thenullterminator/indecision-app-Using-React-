import React from 'react';

export default class Addoption extends React.Component{

    state={
        error:undefined
    };

    addop=(e)=>{
        console.log("Hello:)");
        e.preventDefault();
        const op=e.target.elements.option.value.trim();
        const error=this.props.addoption(op);
        if(!error)
        {
            e.target.elements.option.value='';
        }

        this.setState(()=>({error}));
    }
    
    render(){
        return (
            <div>
            <p className="add-option-error">{this.state.error}</p>
            <form className="add-option" onSubmit={this.addop}>
                <input className="add-option__input" type="text" name="option"/>
                <button className="small-button">Add Option</button>
            </form>
            </div>
        );
    }
}