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
            ops: []
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
            if (!op) {
                return 'Enter a valid value to add option.';
            } else if (this.state.ops.indexOf(op) != -1) {
                return 'The Option already exist.';
            }

            this.setState(function (prevState) {
                // prevState.ops.push(op);
                return {
                    ops: prevState.ops.concat([op])
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

var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOp, onClick: props.pick },
            'What should I do ?'
        )
    );
};
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.removeall },
            'Remove All'
        ),
        props.options.length > 0 ? 'Here are your options:' : 'No options',
        props.options.map(function (op) {
            return React.createElement(Option, { key: op, optxt: op });
        }),
        React.createElement(Option, null)
    );
};

// class Option extends React.Component{
//     render(){
//         return (
//          <p>{this.props.optxt}</p>
//         );
//     }
// }

var Option = function Option(props) {

    return React.createElement(
        'p',
        null,
        props.optxt
    );
};

var Addoption = function (_React$Component2) {
    _inherits(Addoption, _React$Component2);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this2 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this2.addop = _this2.addop.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(Addoption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addop },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }, {
        key: 'addop',
        value: function addop(e) {

            e.preventDefault();
            var op = e.target.elements.option.value.trim();
            var error = this.props.addoption(op);
            if (!error) {
                e.target.elements.option.value = '';
            }
            this.setState(function () {
                return { error: error };
            });
        }
    }]);

    return Addoption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
