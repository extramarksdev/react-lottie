"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lottieWeb = _interopRequireDefault(require("lottie-web"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Lottie = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Lottie() {
    var _this;
    _classCallCheck(this, Lottie);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Lottie, [].concat(args));
    _defineProperty(_this, "handleClickToPause", function () {
      if (_this.anim && _this.anim.isPaused) {
        _this.anim.play();
      } else if (_this.anim) {
        _this.anim.pause();
      }
    });
    return _this;
  }
  _inherits(Lottie, _React$Component);
  return _createClass(Lottie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        options = _this$props.options,
        eventListeners = _this$props.eventListeners;
      var loop = options.loop,
        autoplay = options.autoplay,
        animationData = options.animationData,
        rendererSettings = options.rendererSettings,
        segments = options.segments;
      this.options = {
        container: this.el,
        renderer: 'svg',
        loop: loop !== false,
        autoplay: autoplay !== false,
        segments: segments !== false,
        animationData: animationData,
        rendererSettings: rendererSettings
      };
      this.options = _objectSpread(_objectSpread({}, this.options), options);
      this.anim = _lottieWeb["default"].loadAnimation(this.options);
      this.registerEvents(eventListeners);
      this.setSpeed();
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps /* , nextState */) {
      if (this.options.animationData !== nextProps.options.animationData) {
        this.deRegisterEvents(this.props.eventListeners);
        this.destroy(); // calling destroy here
        this.options = _objectSpread(_objectSpread({}, this.options), nextProps.options);
        this.anim = _lottieWeb["default"].loadAnimation(this.options);
        this.registerEvents(nextProps.eventListeners);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isStopped) {
        this.stop();
      } else if (this.props.segments) {
        this.playSegments();
      } else {
        this.play();
      }
      this.pause();
      this.setSpeed();
      this.setDirection();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.deRegisterEvents(this.props.eventListeners);
      this.destroy(); // calling destroy here as well
      this.options.animationData = null;
      this.anim = null;
    }
  }, {
    key: "setSpeed",
    value: function setSpeed() {
      this.anim.setSpeed(this.props.speed);
    }
  }, {
    key: "setDirection",
    value: function setDirection() {
      this.anim.setDirection(this.props.direction);
    }
  }, {
    key: "play",
    value: function play() {
      this.anim.play();
    }
  }, {
    key: "playSegments",
    value: function playSegments() {
      this.anim.playSegments(this.props.segments);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.anim.stop) {
        this.anim.stop();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.props.isPaused && this.anim && !this.anim.isPaused) {
        this.anim.pause();
      } else if (!this.props.isPaused && this.anim && this.anim.isPaused) {
        this.anim.pause();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.anim) {
        var _this$anim;
        (_this$anim = this.anim) === null || _this$anim === void 0 || _this$anim.destroy();
      }
    }
  }, {
    key: "registerEvents",
    value: function registerEvents(eventListeners) {
      var _this2 = this;
      eventListeners.forEach(function (eventListener) {
        _this2.anim.addEventListener(eventListener.eventName, eventListener.callback);
      });
    }
  }, {
    key: "deRegisterEvents",
    value: function deRegisterEvents(eventListeners) {
      var _this3 = this;
      eventListeners.forEach(function (eventListener) {
        _this3.anim.removeEventListener(eventListener.eventName, eventListener.callback);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props2 = this.props,
        width = _this$props2.width,
        height = _this$props2.height,
        ariaRole = _this$props2.ariaRole,
        ariaLabel = _this$props2.ariaLabel,
        isClickToPauseDisabled = _this$props2.isClickToPauseDisabled,
        title = _this$props2.title;
      var getSize = function getSize(initial) {
        var size;
        if (typeof initial === 'number') {
          size = "".concat(initial, "px");
        } else {
          size = initial || '100%';
        }
        return size;
      };
      var lottieStyles = _objectSpread({
        width: getSize(width),
        height: getSize(height),
        overflow: 'hidden',
        margin: '0 auto',
        outline: 'none'
      }, this.props.style);
      var onClickHandler = isClickToPauseDisabled ? function () {
        return null;
      } : this.handleClickToPause;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(c) {
          _this4.el = c;
        },
        style: lottieStyles,
        onClick: onClickHandler,
        title: title,
        role: ariaRole,
        "aria-label": ariaLabel,
        tabIndex: "0"
      });
    }
  }]);
}(_react["default"].Component);
Lottie.propTypes = {
  eventListeners: _propTypes["default"].arrayOf(_propTypes["default"].object),
  options: _propTypes["default"].object.isRequired,
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  isStopped: _propTypes["default"].bool,
  isPaused: _propTypes["default"].bool,
  speed: _propTypes["default"].number,
  segments: _propTypes["default"].arrayOf(_propTypes["default"].number),
  direction: _propTypes["default"].number,
  ariaRole: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  isClickToPauseDisabled: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Lottie.defaultProps = {
  eventListeners: [],
  isStopped: false,
  isPaused: false,
  speed: 1,
  ariaRole: 'button',
  ariaLabel: 'animation',
  isClickToPauseDisabled: false,
  title: ''
};