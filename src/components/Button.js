import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import '../styles/button.css'

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                <p>{this.props.name}</p>
            </button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Button