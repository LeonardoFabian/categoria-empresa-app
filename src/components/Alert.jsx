import React from 'react'
import './Alert.css'
import PropTypes from 'prop-types'

const AlertInfo = ({data}) => {
    return (
        <div id="app-alert" className="alert_info">            
            <p className="h5">{data.razonSocial}</p>
            <p>{`RNC: ${data.rnc}`}</p>
            <span>Categoría Salarial</span>
            <h2><span className="badge badge-light">{data.descripcion}</span></h2>
        </div>
    )
}

AlertInfo.propTypes = {

}

export default AlertInfo
