'use strict';

var vis = false;

var toggle = function toggle() {
    vis = !vis;
    renderapp();
};

var renderapp = function renderapp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            'Show Details'
        ),
        vis && React.createElement(
            'p',
            null,
            'Hey these are the Details :)'
        )
    );

    var approot = document.getElementById('app');
    ReactDOM.render(template, approot);
};

renderapp();
