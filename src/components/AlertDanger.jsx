import React from 'react'
import './Alert.css'
import PropTypes from 'prop-types'

const AlertDanger = props => {
    return (
        <div id="app-alert" className="alert_danger">            
            <p>No encontramos resultados que coincidan con su búsqueda</p>
            <button class="btn btn-danger">Volver a consultar</button>
        </div>
    )
}

AlertDanger.propTypes = {

}

export default AlertDanger
