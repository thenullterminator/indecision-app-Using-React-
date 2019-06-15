class Counter extends React.Component{

    constructor(props)
    {
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleSubOne=this.handleSubOne.bind(this);
        this.handlereset=this.handlereset.bind(this);
        this.state={
            count:props.count
        };
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handlereset}>reset</button>
            </div>
        );
    }

    handleAddOne(){

        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            };
        });
    }
    handleSubOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
            };
        });
    }
    handlereset(){
        this.setState((prevState)=>{
            return {
                count:0
            };
        });
    }
}
Counter.defaultProps={
    count:0
};

ReactDOM.render(<Counter count={1}/>,document.getElementById('app'));

// let count=0;

// const inc=()=>{
//     count++;
//     renderapp();
// };

// const dec=()=>{
//     count--;
//     renderapp();
// };

// const reset=()=>{
//     count=0;
//     renderapp();
// };



// const renderapp=()=>{

//     const template=(
//         <div>
    
//             <h1>Counter: {count} </h1>
//             <button onClick={inc}>+1</button>
//             <button onClick={dec}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
    
//     const approot=document.getElementById('app');
//     ReactDOM.render(template,approot);
// };

// renderapp();
