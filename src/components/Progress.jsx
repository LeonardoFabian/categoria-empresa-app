import React from 'react'
import './Progress.css'
import PropTypes from 'prop-types'

const Progress = props => {
    return (
        // <div class="row d-flex justify-content-center mt-100">
        //     <div class="col-md-6">
        //         <div class="progress blue"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
        //             <div class="progress-value">20.2%</div>
        //         </div>
               
        //     </div>
        // </div>

        <div className="row d-flex justify-content-center">
            <div className="circular">
                <div className="inner"></div>
                <div className="number">20.2%</div>
                <div className="circle">
                    <div className="bar left">
                        <div className="progress"></div>
                    </div>
                    <div className="bar right">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Progress.propTypes = {

}

export default Progress
