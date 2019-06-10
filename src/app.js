class IndecisionApp extends React.Component{

   render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of computer";
        let ops=['one','two','three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={ops}/>
                <Addoption/>
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
                <button onClick={this.pick}>What should I do ?</button>
            </div>
        );
    }
    pick(){
        alert("pick");
    }
}
const template=(
    <div>
       
    </div>
);
class Options extends React.Component{
    render(){
        return (
            <div>
               <button onClick={this.removeall}>Remove All</button>
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
    render(){
        return (
            <form onSubmit={this.addop}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }

    addop(e){

        e.preventDefault();
        const op=e.target.elements.option.value.trim();

        if(op)
        {
            e.target.elements.option.value='';
            alert(op);   
        }
    }
}



ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

