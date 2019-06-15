class IndecisionApp extends React.Component  {

    constructor(props){
        super(props);
        this.removeall=this.removeall.bind(this);
        this.handlepick=this.handlepick.bind(this);
        this.addoption=this.addoption.bind(this);
        this.state={
            ops:[]
        }
    }

    removeall(){
        this.setState(()=>{
            return {
                ops:[]
            }
        });
    }

    handlepick(){
        const op=Math.floor(Math.random()*this.state.ops.length);
        alert(this.state.ops[op]);
    }

    addoption(op)
    {
        if(!op)
        {
            return 'Enter a valid value to add option.'
        }
        else if(this.state.ops.indexOf(op)!=-1)
        {
            return 'The Option already exist.'
        }

        this.setState((prevState)=>{
            // prevState.ops.push(op);
            return{
                ops:prevState.ops.concat([op])
            };
        });
    }

   render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOp={this.state.ops.length>0} pick={this.handlepick}/>
                <Options removeall={this.removeall} options={this.state.ops}/>
                <Addoption addoption={this.addoption}/>
            </div>
        );
    }
}

class Header extends React.Component{
    render()
    {
        return (
                <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button disabled={!this.props.hasOp} onClick={this.props.pick}>What should I do ?</button>
            </div>
        );
    }
}
class Options extends React.Component{
    render(){
        return (
            <div>
               <button onClick={this.props.removeall}>Remove All</button>
               {(this.props.options.length>0)?'Here are your options:':'No options'}
               {this.props.options.map((op)=><Option key={op} optxt={op}/>)}
               <Option/>
            </div>
        );
    }

    removeall(){
        alert('Remove All');
    }
}

class Option extends React.Component{
    render(){
        return (
         <p>{this.props.optxt}</p>
        );
    }
}
class Addoption extends React.Component{
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
        this.setState(()=>{
            return{error};
        });
        
    }
}



ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

