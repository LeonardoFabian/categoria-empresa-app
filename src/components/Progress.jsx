import React from 'react'
import './Progress.css'
import PropTypes from 'prop-types'

const Progress = ({ data = [] }) => {

    return (               

        <div className="row d-flex justify-content-center">
            
            <div className="box">                
                <div className="percent">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70" style={{
                            stroke: "#EE2A24", 
                            transition: 'all 0.3s ease-in-out',                                       
                            strokeDashoffset: data.strokeValue
                        }}></circle>
                    </svg>
                    <div className="num">
                        <h3>{data.percent}<span>%</span></h3>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text">Nuevo salario:<br/>{data.salary}</h2>
                    <small>{data.description}</small>
                </div>
            </div>
                   
               
            <div className="box-info">
                <h4>IMPORTANTE</h4>
                 <ul>
                    <li>
                        <small>
                            No incluye turismo, restaurantes, bares, zonas francas, construcción, industria azucarera ni ONGs de salud.
                        </small>
                    </li>
                    <li>
                        <small>
                            El aumento anterior se hizo en base a otra clasificación.
                        </small>
                    </li>
                    <li>
                        <small>
                            El aumento anterior no especificaba aumento para microempresas.
                        </small>
                    </li>
                 </ul>
            </div>
        </div>
    )
}

Progress.propTypes = {
    data: PropTypes.object
}

export default Progress
