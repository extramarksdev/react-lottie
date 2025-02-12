"use strict";

var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _chai = require("chai");
var _sinon = _interopRequireDefault(require("sinon"));
var _index = _interopRequireDefault(require("../index"));
var _pinjump = _interopRequireDefault(require("../stories/pinjump.json"));
var _beatingHeart = _interopRequireDefault(require("../stories/beating-heart.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _global = global,
  describe = _global.describe,
  it = _global.it;
var defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: _pinjump["default"],
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
describe('react-lottie', function () {
  describe('props', function () {
    describe('isClickToPauseDisabled', function () {
      it('should prevent handleClickToPause from being called when true', function () {
        var component = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
          options: defaultOptions
        }));
        var spy = _sinon["default"].stub();
        component.instance().handleClickToPause = spy;
        component.instance().forceUpdate();
        component.find('div').at(0).simulate('click');
        (0, _chai.expect)(spy.callCount).to.equal(1);
        spy.reset();
        component.setProps({
          isClickToPauseDisabled: true
        });
        component.find('div').at(0).simulate('click');
        (0, _chai.expect)(spy.callCount).to.equal(0);
      });
    });
    describe('ariaRole, ariaLabel, and title', function () {
      it('should set the aria role correctly', function () {
        var component = (0, _enzyme.shallow)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
          options: defaultOptions,
          ariaRole: "test",
          ariaLabel: "testlabel",
          title: "title"
        }));
        (0, _chai.expect)(component.find('div').prop('role')).to.equal('test');
        (0, _chai.expect)(component.find('div').prop('aria-label')).to.equal('testlabel');
        (0, _chai.expect)(component.find('div').prop('title')).to.equal('title');
      });
    });
    describe('height and width', function () {
      it('should set the inline styles correctly', function () {
        var component = (0, _enzyme.shallow)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
          options: defaultOptions,
          height: 199,
          width: 188
        }));
        (0, _chai.expect)(component.find('div').prop('style').height).to.equal('199px');
        (0, _chai.expect)(component.find('div').prop('style').width).to.equal('188px');
      });
    });
  });
  describe('when props change', function () {
    it('should change the animation that is being played', function () {
      var component = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
        options: defaultOptions
      }));
      (0, _chai.expect)(component.instance().anim.animationData).to.equal(_pinjump["default"]);
      component.setProps({
        options: _objectSpread(_objectSpread({}, defaultOptions), {}, {
          animationData: _beatingHeart["default"]
        })
      });
      (0, _chai.expect)(component.instance().anim.animationData).to.equal(_beatingHeart["default"]);
    });
  });
  describe('component lifecycle', function () {
    describe('componentDidMount', function () {
      it('should register events', function () {
        var registerEventsSpy = _sinon["default"].stub();
        var component = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
          options: defaultOptions
        }));
        component.instance().registerEvents = registerEventsSpy;
        component.update();
        component.instance().componentDidMount();
        (0, _chai.expect)(registerEventsSpy.callCount).to.equal(1);
      });
      it('should load the animation', function () {
        var component = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
          options: defaultOptions
        }));
        var animation = component.instance().anim;
        (0, _chai.expect)(animation.animationData).to.equal(_pinjump["default"]);
      });
    });
    describe('componentWillUpdate', function () {
      it('should register events when animationData changes', function () {
        var registerEventsSpy = _sinon["default"].stub();
        var component = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
          options: defaultOptions
        }));
        component.instance().registerEvents = registerEventsSpy;
        component.update();
        component.instance().componentWillUpdate({
          options: _objectSpread(_objectSpread({}, defaultOptions), {}, {
            animationData: _beatingHeart["default"]
          })
        });
        (0, _chai.expect)(registerEventsSpy.callCount).to.equal(1);
      });
    });
    describe('componentDidUnmount', function () {
      it('should de-register events', function () {
        var spy = _sinon["default"].stub();
        var component = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
          options: defaultOptions
        }));
        component.instance().deRegisterEvents = spy;
        component.update();
        component.unmount();
        (0, _chai.expect)(spy.callCount).to.equal(1);
      });
      it('should destroy the animation', function () {
        var spy = _sinon["default"].stub();
        var component = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
          options: defaultOptions
        }));
        component.instance().anim = {
          destroy: spy
        };
        component.unmount();
        (0, _chai.expect)(spy.callCount).to.equal(1);
      });
    });
  });
});