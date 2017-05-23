import React = require('react')


function styled(comp, style?) {
  if (!style) {
    style = comp
    comp = 'div'
  }

  return props => {
    const compStyle = typeof style == 'function' ? style(props) : style
    const compProps = {...props, style: {...props.style, ...compStyle}}
    return React.createElement(comp, compProps)
  }
}


export default styled
