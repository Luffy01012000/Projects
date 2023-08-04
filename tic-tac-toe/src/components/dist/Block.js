"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Block = function (props) {
    return (react_1["default"].createElement("div", { onClick: props.onClick, className: "block" }, props.value));
};
exports["default"] = Block;
