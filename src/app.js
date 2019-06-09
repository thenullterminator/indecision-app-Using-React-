console.log("Our App is running");

const app={

    title:"Indecision App",
    subtitle:"Put your life in the hands of computer",
    options:[]
};

const onFormSubmit=(e)=>{

    e.preventDefault();
    const option=e.target.elements.option.value;
    
    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value='';
        renderapp();
    }
};

const removeall=()=>{
    app.options=[];
    renderapp();
};

const makedec=()=>{

    const option=Math.floor(Math.random()*app.options.length);
    alert(app.options[option]);

};

const renderapp=()=>{

    const template=(
        <div>
    
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length>0)? 'Here are your options' : 'No options'}</p>
            <button disabled={!app.options.length>0} onClick={makedec}>What should I do ?</button>
            <button onClick={removeall}>Remove All</button>
            <ol>
                { app.options.map((val)=><li key={val}>{val}</li>) }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
    
        </div>
    );

    const approot=document.getElementById('app');
    ReactDOM.render(template,approot);
};

renderapp();




