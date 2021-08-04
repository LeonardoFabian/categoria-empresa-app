import React from 'react'
import image from './../banner.jpg'

const Banner = () => {
    return (
        <>
            <img src={image} alt="banner sobre salario mínimo" className="banner image-fluid" style={{ maxWidth: "100%" }} />
        </>
    )
}

export default Banner