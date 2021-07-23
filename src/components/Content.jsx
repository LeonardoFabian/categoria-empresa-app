import React from 'react'
import { useFetchData } from '../hooks/useFetchData'
import './Content.css'
import Form from './Form'
import Alert from './Alert'
import Progress from './Progress'
import Banner from './Banner'

const Content = () => {

    const [empresa, progress, handleInput, handleSubmit] = useFetchData();

    return (
        
            <main id="content">
                <div className="container">
                        <div className="d-sm-block d-md-flex justify-content-around">
                            <div id="left" className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                <section id="data-input">
                                    <div className="text-center">
                                        <h1 className="title">Categoría Salarial</h1>
                                        <p>Consulta la escala de calificación de tu empresa.</p>
                                    </div>

                                    <Form handleSubmit={handleSubmit} data={empresa} handleInput={handleInput}/>

{

}
                                    <div id="data-result">
                                        <small className="text-muted" style={{ display: "block", marginBottom: "20px", textAlign: "center" }}>Mostrando resultado para: {empresa.rnc}</small>                                        
                                        <Alert data={empresa}/>
                                        <small className="text-muted text-center">Los criterios para la calificación salarial de las empresas están contemplados en la resolución Sobre Salario Mínimo Nacional vigente.</small>
                                    </div>

                                    <div id="document-link" className="text-center">
                                        <a href="http://mt.gob.do/images/docs/marco-legal/resoluciones/Resolución Salarios.CNS.2021.pdf" rel="noreferrer">
                                            Ver Resolución sobre Salario Mínimo
                                        </a>
                                    </div>

                                </section>
                                
                                

                            </div>
                            <div id="right" className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                            
                                { progress ? <Progress /> : <Banner /> }                                
                                
                            </div>
                        </div>
                </div>
            </main>            
        
    )
}

export default Content
