var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleTimer = function (_React$Component) {
  _inherits(SimpleTimer, _React$Component);

  function SimpleTimer(props) {
    _classCallCheck(this, SimpleTimer);

    var _this = _possibleConstructorReturn(this, (SimpleTimer.__proto__ || Object.getPrototypeOf(SimpleTimer)).call(this, props));

    _this.state = { seconds: 0 };
    return _this;
  }

  _createClass(SimpleTimer, [{
    key: "tick",
    value: function tick() {
      this.setState({
        seconds: this.state.seconds + 0.1
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log("componentDid Mount Called .....");
      var interval = setInterval(function () {
        _this2.tick();
      }, 100);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Seconds:",
        this.state.seconds.toFixed(1)
      );
    }
  }]);

  return SimpleTimer;
}(React.Component);

ReactDom.render(React.createElement(SimpleTimer, null), document.getElementById("app"));