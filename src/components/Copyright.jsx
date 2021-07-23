import React from 'react'
import PropTypes from 'prop-types'

const Copyright = ({text, link}) => {   

    return (        
        <p className='text-sm font-bold mb-2'>
            &copy; {new Date().getFullYear()} <a href={link} rel="noreferrer" id="copyright-link">{text}</a>
        </p>      
    )
}

Copyright.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string    
}

export default Copyright
