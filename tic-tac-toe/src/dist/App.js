"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Block_1 = require("./components/Block");
function App() {
    var _a = react_1.useState(Array(9).fill(null)), state = _a[0], setState = _a[1];
    var _b = react_1.useState("X"), currp = _b[0], setcurrP = _b[1];
    var checkWinner = function () {
        var win = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (var i = 0; i < win.length; i++) {
            var _a = win[i], a = _a[0], b = _a[1], c = _a[2];
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
                return true;
        }
        return false;
    };
    var handleBlockvalue = function (index) {
        if (state[index] !== null)
            return;
        state[index] = currp;
        setcurrP(currp === "X" ? "O" : "X");
        //winning logic
        var win = checkWinner();
        setState(state);
        if (win) {
            console.log(currp + " won!!");
        }
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement(Block_1["default"], { onClick: function () { return handleBlockvalue(0); }, value: state[0] }),
            react_1["default"].createElement(Block_1["default"], { onClick: function () { return handleBlockvalue(3); }, value: state[3] }),
            react_1["default"].createElement(Block_1["default"], { onClick: function () { return handleBlockvalue(6); }, value: state[6] })),
        react_1["default"].createElement("div", { className: "rows" },
            react_1["default"].createElement(Block_1["default"], { onClick: function () { return handleBlockvalue(1); }, value: state[1] }),
            react_1["default"].createElement(Block_1["default"], { onClick: function () { return handleBlockvalue(4); }, value: state[4] }),
            react_1["default"].createElement(Block_1["default"], { onClick: function () { return handleBlockvalue(7); }, value: state[7] })),
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement(Block_1["default"], { onClick: function () { return handleBlockvalue(2); }, value: state[2] }),
            react_1["default"].createElement(Block_1["default"], { onClick: function () { return handleBlockvalue(5); }, value: state[5] }),
            react_1["default"].createElement(Block_1["default"], { onClick: function () { return handleBlockvalue(8); }, value: state[8] }))));
}
exports["default"] = App;
