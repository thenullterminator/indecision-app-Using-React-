"use strict";

var user = {
    name: "Dhairya Patel",
    age: 18,
    location: "Nashik"
};

function getloc(loc) {
    if (loc) {
        return React.createElement(
            "p",
            null,
            "location: ",
            loc
        );
    }
}

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getloc(user.location)
);
var approot = document.getElementById('app');

ReactDOM.render(template, approot);
