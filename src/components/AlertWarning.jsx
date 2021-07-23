import React from 'react'
import './Alert.css'
import PropTypes from 'prop-types'

const AlertWarning = props => {
    return (
        <div id="app-alert" className="alert_warning">            
            <p>La empresa no posee registros en la planilla de personal fijo del año actual</p>
            <button class="btn btn-warning">Volver a consultar</button>
        </div>
    )
}

AlertWarning.propTypes = {

}

export default AlertWarning
