class Vistoggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state={
            vis:false
        };
    }
    render(){
        
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggle}>{(this.state.vis)?'Hide Details':'Show Details'}</button>
            {this.state.vis && <p>Hey these are the Details :)</p>}
            </div>
        );
    }

    toggle(){
        this.setState((prevState)=>{
            return {
                vis:!prevState.vis
            };
        });
    }
}

ReactDOM.render(<Vistoggle/>,document.getElementById('app'));


// let vis=false;

// const toggle=()=>{
//     vis=!vis;
//     renderapp();
// }

// const renderapp=()=>{

//     const template =(
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggle}>Show Details</button>
//         {vis && <p>Hey these are the Details :)</p>}
//     </div>
//     );

//     const approot=document.getElementById('app');
//     ReactDOM.render(template,approot);
// };

// renderapp();
