

let vis=false;

const toggle=()=>{
    vis=!vis;
    renderapp();
}

const renderapp=()=>{

    const template =(
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggle}>Show Details</button>
        {vis && <p>Hey these are the Details :)</p>}
    </div>
    );

    const approot=document.getElementById('app');
    ReactDOM.render(template,approot);
};

renderapp();
