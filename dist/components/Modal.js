"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _cross = _interopRequireDefault(require("./cross.svg"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = props => {
  if (!props.show) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal ".concat(props.className),
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, props.children, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-close"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _cross.default,
    onClick: props.onClose,
    className: "close",
    alt: "cross"
  })))));
};
Modal.propTypes = {
  className: _propTypes.default.string,
  onClose: _propTypes.default.func.isRequired
};
Modal.defaultProps = {
  show: false
};
var _default = Modal;
exports.default = _default;