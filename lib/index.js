"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function styled(comp, style) {
    if (!style) {
        style = comp;
        comp = 'div';
    }
    return function (props) {
        var compStyle = typeof style == 'function' ? style(props) : style;
        var combinedStyle = props.isStyled ? __assign({}, compStyle, props.style) : __assign({}, props.style, compStyle);
        var compProps = __assign({}, props, { style: combinedStyle, isStyled: true });
        return React.createElement(comp, compProps);
    };
}
exports.default = styled;
