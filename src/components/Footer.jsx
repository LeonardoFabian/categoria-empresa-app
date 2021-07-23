import React from 'react'
import './Footer.css'
import Copyright from './Copyright'

const Footer = () => {

    const links = [
        { link: 'https://tss.gob.do/', title: 'TSS', image: 'https://tss.gob.do/images/tss_da2nt.jpg' },
        { link: 'https://tss.gob.do/', title: 'TSS', image: 'https://tss.gob.do/images/tss_da2nt.jpg' },
        { link: 'https://tss.gob.do/', title: 'TSS', image: 'https://tss.gob.do/images/tss_da2nt.jpg' },
    ];   

    return (
        // <!-- component -->
        <footer id="app-footer" style={{ background: "#FFFFFF" }} >
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
            <div id="app-copyright" className="bg-dark">
                <div className="container">      
                    <div id="copyright" className="text-white text-center">
                        <Copyright text="Ministerio de Trabajo" link="http://mt.gob.do/" />   
                    </div>                                    
                </div>
            </div>
        </footer>
    )
}

export default Footer
