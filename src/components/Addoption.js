import React from 'react';

export default class Addoption extends React.Component{
    constructor(props){
        super(props);
        this.addop=this.addop.bind(this);
        this.state={
            error:undefined
        };
    }
    render(){
        return (
            <div>
            <p>{this.state.error}</p>
            <form onSubmit={this.addop}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }

    addop(e){

        e.preventDefault();
        const op=e.target.elements.option.value.trim();
        const error=this.props.addoption(op);
        if(!error)
        {
            e.target.elements.option.value='';
        }

        this.setState(()=>({error}));
    }
}