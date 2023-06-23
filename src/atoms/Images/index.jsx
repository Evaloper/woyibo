import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.png'
import ftlogo from './footer-logo.png'

export const Images = props => {
    if (props.name === "logo"){
        return(
            <img src={logo} {...props} />
        )
    }
    if (props.name === "ft-logo"){
        return(
            <img src={ftlogo} {...props} />
        )
    }

  return (
    <img src={props.src}/>
  )
}
