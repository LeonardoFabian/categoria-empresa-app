import React from 'react'
import './Footer.css'
import Copyright from './Copyright'
import logo_footer from '../logo-footer.svg'

const Footer = () => {

    const links = [
        { 
            link: 'https://dgii.gov.do/Paginas/default.aspx', 
            title: 'Dirección General de Impuestos Internos (DGII)', 
            image: 'https://dgii.gov.do/SiteAssets/espiralii-trnas.png' 
        },
        { 
            link: 'https://tss.gob.do/', 
            title: 'Tesorería de la Seguridad Social (TSS)', 
            image: 'https://tss.gob.do/images/tss_da2nt.jpg' 
        },
        { 
            link: 'http://www.cnss.gob.do/', 
            title: 'Consejo Nacional de Seguridad Social (CNSS)', 
            image: 'https://tss.gob.do/images/cnssfw.png?crc=4048561201' 
        },
    ];   

    return (
        <>
            <div className="container text-center">                             
                <ul id="app-external-links" className="list-unstyled list-inline">
                    {
                        links.map((item) => (
                            <li key={item.title} className="list-inline-item">
                                <a href={item.link} target="_blank" title={item.title} rel="noreferrer" className="external-links">
                                    <img src={item.image} alt={item.title} className=" external-links-img" />
                                </a>                                
                            </li>
                        ))
                    }                                            
                </ul>                                   
            </div>
            
            <footer id="app-footer">            
                <div id="app-info">
                    <div className="container">                        
                        <div className="row justify-content-center"> 
                            
                            <div id="info" className="col-sm-12 col-md-6 col-lg-6 text-center text-light order-1 order-md-2">   
                                <img src={logo_footer} alt="Ministerio de Trabajo" className="img-fluid" />                      
                                <h5>Ministerio de Trabajo</h5>
                                <p>Ave. Enrique Jiménez Moya 5, Centro de los Héroes</p>
                                <p>Santo Domingo, Distrito Nacional, R.D.</p>
                                <p>Tel.: 809 535-4404 | info@mt.gob.do</p>
                            </div>
                        </div>
                    </div>
                </div>   
                <div id="app-copyright">
                    <div className="container">      
                        <div id="copyright" className="text-white text-center">
                            <Copyright text="Ministerio de Trabajo" link="http://mt.gob.do/" />   
                        </div>                                    
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
