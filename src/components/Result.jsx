import React from 'react'
import './Alert.css'
import PropTypes from 'prop-types'
import AlertInfo from './AlertInfo'
import AlertDanger from './AlertDanger'

const Result = ({data, handleReset}) => {

    var showAlert;

    if (data.type === "alert_info") {
        showAlert = <AlertInfo data={data}/>;
    } else {
        showAlert = <AlertDanger data={data} handleReset={handleReset}/>;
    }

    return (
        <div id="data-result">
            <small className="text-muted" style={{ display: "block", marginBottom: "20px", textAlign: "center" }}>Mostrando resultado para: {data.key}</small>                                        
            { showAlert }    
            <small className="text-muted text-center">Los criterios para la calificación salarial de las empresas están contemplados en la resolución Sobre Salario Mínimo Nacional vigente.</small>
        </div>        
    )
}

Result.propTypes = {

}

export default Result
