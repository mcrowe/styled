"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function styled(comp, style) {
    if (!style) {
        style = comp;
        comp = 'div';
    }
    return props => {
        const compStyle = typeof style == 'function' ? style(props) : style;
        const compProps = Object.assign({}, props, { style: Object.assign({}, props.style, compStyle) });
        return React.createElement(comp, compProps);
    };
}
exports.default = styled;
