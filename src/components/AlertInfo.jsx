import React from 'react'
import './Alert.css'
import PropTypes from 'prop-types'
import voidSticker from '../mt-void-sticker.png'
import mt_tics_certificate from '../mt-hologram-square.gif'

const AlertInfo = ({data}) => {
    return (
        <div id="app-alert" className={data.type}>            
            <p className="h5">{data.title}</p>           
            <span>{data.subtitle}</span>
            <div id="void-sticker" className="d-flex align-items-center flex-nowrap" style={{ backgroundImage: `url(${voidSticker})` }}>
                <div id="alert-image">
                    <img src={mt_tics_certificate} className="img-fluid" alt="Tecnología de la Información y Comunicaciones (TICs)" style={{ borderRadius: '100%', maxWidth: '50px'}}/>
                </div>        
                
                <span id="sticker-text" className="text-center h3 align-middle text-wrap">{data.stickerText}</span>
               
                {/* <div id="sticker-code">
                    <small>{data.key}</small>   
                </div> */}

            </div>
        </div>
    )
}

AlertInfo.propTypes = {

}

export default AlertInfo
