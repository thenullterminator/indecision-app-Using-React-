'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeall = _this.removeall.bind(_this);
        _this.handlepick = _this.handlepick.bind(_this);
        _this.addoption = _this.addoption.bind(_this);
        _this.state = {
            ops: ['one', 'two', 'three']
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'removeall',
        value: function removeall() {
            this.setState(function () {
                return {
                    ops: []
                };
            });
        }
    }, {
        key: 'handlepick',
        value: function handlepick() {
            var op = Math.floor(Math.random() * this.state.ops.length);
            alert(this.state.ops[op]);
        }
    }, {
        key: 'addoption',
        value: function addoption(op) {
            this.setState(function (prevState) {
                prevState.ops.push(op);
                return {
                    ops: prevState.ops
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision App";
            var subtitle = "Put your life in the hands of computer";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOp: this.state.ops.length > 0, pick: this.handlepick }),
                React.createElement(Options, { removeall: this.removeall, options: this.state.ops }),
                React.createElement(Addoption, { addoption: this.addoption })
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { disabled: !this.props.hasOp, onClick: this.props.pick },
                    'What should I do ?'
                )
            );
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.removeall },
                    'Remove All'
                ),
                this.props.options.length > 0 ? 'Here are your options:' : 'No options',
                this.props.options.map(function (op) {
                    return React.createElement(Option, { key: op, optxt: op });
                }),
                React.createElement(Option, null)
            );
        }
    }, {
        key: 'removeall',
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                this.props.optxt
            );
        }
    }]);

    return Option;
}(React.Component);

var Addoption = function (_React$Component6) {
    _inherits(Addoption, _React$Component6);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this6 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this6.addop = _this6.addop.bind(_this6);
        return _this6;
    }

    _createClass(Addoption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.addop },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    'Add Option'
                )
            );
        }
    }, {
        key: 'addop',
        value: function addop(e) {

            e.preventDefault();
            var op = e.target.elements.option.value.trim();

            if (op) {
                e.target.elements.option.value = '';
                this.props.addoption(op);
            }
        }
    }]);

    return Addoption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
