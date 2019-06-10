class IndecisionApp extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Action/>
                <Options/>
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
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of computer</h2>
                </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do ?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
               Your Options:
               <Option/>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <ol>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
        </ol>
        );
    }
}
class Addoption extends React.Component{
    render(){
        return (
            <form>
                <input type="text" name="addop"/>
                <button>Add Option</button>
            </form>
        );
    }
}

const template=(
    <div>
       
    </div>
);

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

