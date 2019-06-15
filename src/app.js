class IndecisionApp extends React.Component  {

    constructor(props){
        super(props);
        this.removeall=this.removeall.bind(this);
        this.handlepick=this.handlepick.bind(this);
        this.addoption=this.addoption.bind(this);
        this.removesingle=this.removesingle.bind(this);

        this.state={
            ops:props.options
        }
    }

    removeall(){
        this.setState(()=>({ ops:[]}));
    }

    removesingle(option){
        this.setState((prevState)=>{
            return {
                ops:prevState.ops.filter((op)=>{
                    return op!==option;
                })
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

        this.setState((prevState)=>({ ops:prevState.ops.concat([op]) }));
    }

   render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of computer";
        return (
            <div>
                <Header  subtitle={subtitle}/>
                <Action hasOp={this.state.ops.length>0} pick={this.handlepick}/>
                <Options removesingle={this.removesingle} removeall={this.removeall} options={this.state.ops}/>
                <Addoption addoption={this.addoption}/>
            </div>
        );
    }
}

const Header=(props)=>{
   
    return (
            <div>
            <h1>{props.title}</h1>
            {props.subtitle&&<h2>{props.subtitle}</h2>}
            </div>
    );
    
};
Header.defaultProps={
    title:'Indecision App'
}

const Action=(props)=>{

    return (
        <div>
            <button disabled={!props.hasOp} onClick={props.pick}>What should I do ?</button>
        </div>
    );
    
};
const Options=(props)=>{
        return (
            <div>
               <button onClick={props.removeall}>Remove All</button>
               {(props.options.length>0)?'Here are your options:':'No options'}
               {props.options.map((op)=><Option removesingle={props.removesingle} key={op} optxt={op}/>)}
               <Option/>
            </div>
        );
}

// class Option extends React.Component{
//     render(){
//         return (
//          <p>{this.props.optxt}</p>
//         );
//     }
// }

const Option=(props)=>{

    return (
        <div>
        <p>{props.optxt}
        {props.optxt &&
        <button onClick={(e)=>{
            props.removesingle(props.optxt);
        }}>Remove</button>}
        </p>
        </div>
       );

};
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

        this.setState(()=>({error}));
    }
}


IndecisionApp.defaultProps={
    options:[]
};

ReactDOM.render(<IndecisionApp options={[]}/>,document.getElementById('app'));

