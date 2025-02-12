"use strict";

var _react = _interopRequireDefault(require("react"));
var _storybook = require("@kadira/storybook");
var _lottieControl = _interopRequireDefault(require("./lottie-control"));
var _lottieControlSegments = _interopRequireDefault(require("./lottie-control-segments"));
var _toggleLike = _interopRequireDefault(require("./toggle-like"));
var _TransitionLoop = _interopRequireDefault(require("./TransitionLoop"));
var _TransitionWithOptions = _interopRequireDefault(require("./TransitionWithOptions"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _storybook.storiesOf)('Lottie Animation View', module).add('with control', function () {
  return /*#__PURE__*/_react["default"].createElement(_lottieControl["default"], null);
}).add('toggle like', function () {
  return /*#__PURE__*/_react["default"].createElement(_toggleLike["default"], null);
}).add('transitions & loops', function () {
  return /*#__PURE__*/_react["default"].createElement(_TransitionLoop["default"], null);
}).add('transitions with options', function () {
  return /*#__PURE__*/_react["default"].createElement(_TransitionWithOptions["default"], null);
}).add('with segments', function () {
  return /*#__PURE__*/_react["default"].createElement(_lottieControlSegments["default"], null);
});