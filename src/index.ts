import * as React from 'react'


/**
 * Get a styled version of a given component.
 *
 * @param comp A react component, or a string representing a dom element.
 *             Defaults to 'div'.
 * @param style An object of styles, or a function of props which returns such an object.
 */
export default function styled(comp = 'div', style) {

  // Return a new component which renders the given component with styling applied.
  return React.createClass({

    // Forward native props so that things like Touchable work
    // on react native.
    setNativeProps(nativeProps) {
      this._root && this._root.setNativeProps(nativeProps)
    },

    render() {
      // If "style" is a function then determine component style by passing it the props.
      // Otherwise it defines the component style.
      const compStyle = typeof style == 'function' ? style(this.props) : style

      // Combine the style with explicitly set "style" prop.
      // NOTE: If component is already a "styled" component, then we should reverse merge.
      const combinedStyle = this.props.isStyled ? {...compStyle, ...this.props.style} : {...this.props.style, ...compStyle}

      // Final props for the component
      // Include the combined style, a flag telling us whether this component is wrapped,
      // and a way to access the component so that we can set its native props.
      const compProps = {
        ...this.props,
        style: combinedStyle,
        isStyled: true,
        ref: component => this._root = component
      }

      // Return the styled component
      return React.createElement(comp, compProps)
    }
  })
}