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
        const combinedStyle = props.isStyled ? Object.assign({}, compStyle, props.style) : Object.assign({}, props.style, compStyle);
        const compProps = Object.assign({}, props, { style: combinedStyle, isStyled: true });
        return React.createElement(comp, compProps);
    };
}
exports.default = styled;
