"use strict";

console.log("Our App is running");

var app = {

    title: "Indecision App",
    subtitle: "Put your life in the hands of computer",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {

    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderapp();
    }
};

var removeall = function removeall() {
    app.options = [];
    renderapp();
};

var makedec = function makedec() {

    var option = Math.floor(Math.random() * app.options.length);
    alert(app.options[option]);
};

var renderapp = function renderapp() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            "button",
            { disabled: !app.options.length > 0, onClick: makedec },
            "What should I do ?"
        ),
        React.createElement(
            "button",
            { onClick: removeall },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (val) {
                return React.createElement(
                    "li",
                    { key: val },
                    val
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    var approot = document.getElementById('app');
    ReactDOM.render(template, approot);
};

renderapp();
