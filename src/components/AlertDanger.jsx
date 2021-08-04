import React from 'react'
import './Alert.css'
import PropTypes from 'prop-types'


const AlertDanger = ({data, handleReset}) => {

    var alertButton;

    if(data.button){
        alertButton = <button class="btn btn-lg" onClick={handleReset}>{data.buttonText}</button>
    } 
    return (
        <div id="app-alert" className={data.type}>            
            <p>{data.text}</p>
            { alertButton }
        </div>
    )
}

AlertDanger.propTypes = {
    data: PropTypes.object,
    handleReset: PropTypes.func
}

export default AlertDanger
