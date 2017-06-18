import React = require('react')


function styled(comp, style?) {
  if (!style) {
    style = comp
    comp = 'div'
  }

  return props => {
    const compStyle = typeof style == 'function' ? style(props) : style
    const combinedStyle = props.isStyled ? {...compStyle, ...props.style} : {...props.style, ...compStyle}
    const compProps = {...props, style: combinedStyle, isStyled: true}
    return React.createElement(comp, compProps)
  }
}


export default styled
