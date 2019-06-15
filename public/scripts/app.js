'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleSubOne = _this.handleSubOne.bind(_this);
        _this.handlereset = _this.handlereset.bind(_this);
        _this.state = {
            count: props.count
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleSubOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handlereset },
                    'reset'
                )
            );
        }
    }, {
        key: 'handleAddOne',
        value: function handleAddOne() {

            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleSubOne',
        value: function handleSubOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handlereset',
        value: function handlereset() {
            this.setState(function (prevState) {
                return {
                    count: 0
                };
            });
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(React.createElement(Counter, { count: 1 }), document.getElementById('app'));

// let count=0;

// const inc=()=>{
//     count++;
//     renderapp();
// };

// const dec=()=>{
//     count--;
//     renderapp();
// };

// const reset=()=>{
//     count=0;
//     renderapp();
// };


// const renderapp=()=>{

//     const template=(
//         <div>

//             <h1>Counter: {count} </h1>
//             <button onClick={inc}>+1</button>
//             <button onClick={dec}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     const approot=document.getElementById('app');
//     ReactDOM.render(template,approot);
// };

// renderapp();
