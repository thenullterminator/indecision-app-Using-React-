"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            var title = "Indecision App";
            var subtitle = "Put your life in the hands of computer";
            var ops = ['one', 'two', 'three'];
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, null),
                React.createElement(Options, { options: ops }),
                React.createElement(Addoption, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.pick },
                    "What should I do ?"
                )
            );
        }
    }, {
        key: "pick",
        value: function pick() {
            alert("pick");
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.removeall },
                    "Remove All"
                ),
                this.props.options.length > 0 ? 'Here are your options:' : 'No options',
                this.props.options.map(function (op) {
                    return React.createElement(Option, { key: op, optxt: op });
                }),
                React.createElement(Option, null)
            );
        }
    }, {
        key: "removeall",
        value: function removeall() {
            alert('Remove All');
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                this.props.optxt
            );
        }
    }]);

    return Option;
}(React.Component);

var Addoption = function (_React$Component6) {
    _inherits(Addoption, _React$Component6);

    function Addoption() {
        _classCallCheck(this, Addoption);

        return _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).apply(this, arguments));
    }

    _createClass(Addoption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.addop },
                React.createElement("input", { type: "text", name: "option" }),
                React.createElement(
                    "button",
                    null,
                    "Add Option"
                )
            );
        }
    }, {
        key: "addop",
        value: function addop(e) {

            e.preventDefault();
            var op = e.target.elements.option.value.trim();

            if (op) {
                e.target.elements.option.value = '';
                alert(op);
            }
        }
    }]);

    return Addoption;
}(React.Component);

var template = React.createElement("div", null);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
