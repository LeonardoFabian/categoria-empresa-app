import React from 'react'

import image from './../banner.jpg'
import PropTypes from 'prop-types'

const Banner = props => {
    return (
        <>
            <img src={image} alt="banner sobre salario mínimo" className="banner image-fluid" style={{ maxWidth: "100%" }} />
        </>
    )
}

Banner.propTypes = {

}

export default Banner
