'use strict';

var template = React.createElement(
  'h1',
  null,
  React.createElement(
    'i',
    null,
    'This is my first time on react :)'
  )
);
var approot = document.getElementById('app');

ReactDOM.render(template, approot);
