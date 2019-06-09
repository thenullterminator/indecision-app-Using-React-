let count=0;

const inc=()=>{
    count++;
    renderapp();
};

const dec=()=>{
    count--;
    renderapp();
};

const reset=()=>{
    count=0;
    renderapp();
};



const renderapp=()=>{

    const template=(
        <div>
    
            <h1>Counter: {count} </h1>
            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    
    const approot=document.getElementById('app');
    ReactDOM.render(template,approot);
};

renderapp();
