
var user={
    name:"Dhairya Patel",
    age:18,
    location:"Nashik"
};

function getloc(loc){
    if(loc)
    {
        return <p>location: {loc}</p>
    }
}

var template = (
    <div>
        <h1>{(user.name)? user.name:"Anonymous"}</h1>
        {user.age>=18 && <p>Age: {user.age}</p>}
        {getloc(user.location)}
    </div>
);
var approot=document.getElementById('app');

ReactDOM.render(template,approot);