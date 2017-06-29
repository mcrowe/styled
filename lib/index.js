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
/**
 * Get a styled version of a given component.
 *
 * @param comp A react component, or a string representing a dom element.
 *             Defaults to 'div'.
 * @param style An object of styles, or a function of props which returns such an object.
 */
function styled(comp, style) {
    if (comp === void 0) { comp = 'div'; }
    // Return a new component which renders the given component with styling applied.
    return React.createClass({
        // Forward native props so that things like Touchable work
        // on react native.
        setNativeProps: function (nativeProps) {
            this._root && this._root.setNativeProps(nativeProps);
        },
        render: function () {
            var _this = this;
            // If "style" is a function then determine component style by passing it the props.
            // Otherwise it defines the component style.
            var compStyle = typeof style == 'function' ? style(this.props) : style;
            // Combine the style with explicitly set "style" prop.
            // NOTE: If component is already a "styled" component, then we should reverse merge.
            var combinedStyle = this.props.isStyled ? __assign({}, compStyle, this.props.style) : __assign({}, this.props.style, compStyle);
            // Final props for the component
            // Include the combined style, a flag telling us whether this component is wrapped,
            // and a way to access the component so that we can set its native props.
            var compProps = __assign({}, this.props, { style: combinedStyle, isStyled: true, ref: function (component) { return _this._root = component; } });
            // Return the styled component
            return React.createElement(comp, compProps);
        }
    });
}
exports.default = styled;
