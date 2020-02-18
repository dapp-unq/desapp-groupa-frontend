import React from 'react'
import PropTypes from 'prop-types'

const Content2 = props => {
    const propTypes = {
        body: PropTypes.object.isRequired
    }
    const {body} = props
    return (
        <div className= 'Content2'>
            {body}
        </div>
    )
}

export default Content2;

