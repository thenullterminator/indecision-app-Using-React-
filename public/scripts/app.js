'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vistoggle = function (_React$Component) {
    _inherits(Vistoggle, _React$Component);

    function Vistoggle(props) {
        _classCallCheck(this, Vistoggle);

        var _this = _possibleConstructorReturn(this, (Vistoggle.__proto__ || Object.getPrototypeOf(Vistoggle)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            vis: false
        };
        return _this;
    }

    _createClass(Vistoggle, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggle },
                    this.state.vis ? 'Hide Details' : 'Show Details'
                ),
                this.state.vis && React.createElement(
                    'p',
                    null,
                    'Hey these are the Details :)'
                )
            );
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.setState(function (prevState) {
                return {
                    vis: !prevState.vis
                };
            });
        }
    }]);

    return Vistoggle;
}(React.Component);

ReactDOM.render(React.createElement(Vistoggle, null), document.getElementById('app'));

// let vis=false;

// const toggle=()=>{
//     vis=!vis;
//     renderapp();
// }

// const renderapp=()=>{

//     const template =(
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggle}>Show Details</button>
//         {vis && <p>Hey these are the Details :)</p>}
//     </div>
//     );

//     const approot=document.getElementById('app');
//     ReactDOM.render(template,approot);
// };

// renderapp();
