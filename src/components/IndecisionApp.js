import React from 'react';
import Addoption from './Addoption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import Optionmodal from './modal';
 export default class IndecisionApp extends React.Component  {

    state={
        ops:[],
        selectedoption:undefined
    };

    handleclosemodal=()=>{
        this.setState(()=>({
            selectedoption:undefined
        }));
    }   

    handleremoveall=()=>{
        this.setState(()=>({ ops:[]}));
    };

    handleremovesingle=(option)=>{
        this.setState((prevState)=>{
            return {
                ops:prevState.ops.filter((op)=>{
                    return op!==option;
                })
            }
        });
    };

    handlepick=()=>{
        const op=Math.floor(Math.random()*this.state.ops.length);
        this.setState(()=>{
            return {
                selectedoption:this.state.ops[op]
            };
        });
    };

    addoption=(op)=>
    {
        if(!op)
        {
            return 'Enter a valid value to add option.'
        }
        else if(this.state.ops.indexOf(op)!=-1)
        {
            return 'The Option already exist.'
        }

        this.setState((prevState)=>({ ops:prevState.ops.concat([op]) }));
    };


    componentDidUpdate(prevProps,prevState)  {
        if(prevState.ops.length!==this.state.ops.length)  {
            localStorage.setItem('DataBase',JSON.stringify(this.state.ops));
        }
    }

    componentDidMount(){
        try {
            
            const option=JSON.parse(localStorage.getItem('DataBase'));
            if(option)
            {
                this.setState(()=>({ops:option}));
            }

        }
        catch(e){}
    }

  

   render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of computer";
        return (
            <div>
                <Header  subtitle={subtitle}/>
                <Action hasOp={this.state.ops.length>0} pick={this.handlepick}/>
                <Options handleremovesingle={this.handleremovesingle} handleremoveall={this.handleremoveall} options={this.state.ops}/>
                <Addoption addoption={this.addoption}/>
                <Optionmodal handleclosemodal={this.handleclosemodal} selectedoption={this.state.selectedoption}/>
            </div>
        );
    }
}

