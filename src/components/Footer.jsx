import React from 'react'
import './Footer.css'
import Copyright from './Copyright'
import mt_tics_certificate from '../mt-hologram-square.gif'
import logo_footer from '../logo-footer.svg'

const Footer = () => {

    const links = [
        { link: 'https://tss.gob.do/', title: 'TSS', image: 'https://tss.gob.do/images/tss_da2nt.jpg' },
        { link: 'https://tss.gob.do/', title: 'TSS1', image: 'https://tss.gob.do/images/tss_da2nt.jpg' },
        { link: 'https://tss.gob.do/', title: 'TSS2', image: 'https://tss.gob.do/images/tss_da2nt.jpg' },
    ];   

    return (
        <>
            <div className="container text-center">                             
                <ul id="app-external-links" className="list-unstyled list-inline">
                    {
                        links.map((item) => (
                            <li key={item.title} className="list-inline-item">
                                <a href={item.link} target="_blank" rel="noreferrer" className="external-links">
                                    <img src={item.image} alt={item.title} className="img-thumbnail external-links-img" />
                                </a>                                
                            </li>
                        ))
                    }                                            
                </ul>                                   
            </div>
            
            <footer id="app-footer">            
                <div id="app-info">
                    <div className="container">
                        {/* justify-content-start if use 2 footer cols */}
                        <div className="row justify-content-center"> 
                            {/* <div id="mt_tics_certificate" className="col-sm-12 col-md-3 col-lg-3 text-center text-xs-center text-sm-center text-md-left text-light media order-2 order-md-1">
                                <figure className="figure align-self-center d-block">
                                    <img src={mt_tics_certificate} className="figure-img img-fluid" alt="Tecnología de la Información y Comunicaciones (TICs)" />
                                    <figcaption className="figure-caption"></figcaption>
                                </figure> 
                            </div> */}
                            <div id="info" className="col-sm-12 col-md-6 col-lg-6 text-center text-light order-1 order-md-2">   
                                <img src={logo_footer} className="img-fluid" />                      
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
