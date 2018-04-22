import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import '../styles/image.css'

class Image extends Component {
    render() {
        return (
            <img alt={'picture' + this.props.value}
                 onClick={this.props.onClick} 
                 value={this.props.value} 
                 src={this.props.source} />
        )
    }
}

Image.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired
}

export default Image