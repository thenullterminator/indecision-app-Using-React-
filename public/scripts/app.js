'use strict';

var count = 0;

var inc = function inc() {
    count++;
    renderapp();
};

var dec = function dec() {
    count--;
    renderapp();
};

var reset = function reset() {
    count = 0;
    renderapp();
};

var renderapp = function renderapp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Counter: ',
            count,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: inc },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: dec },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    var approot = document.getElementById('app');
    ReactDOM.render(template, approot);
};

renderapp();
