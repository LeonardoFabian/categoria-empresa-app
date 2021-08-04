
import React from 'react'
import PropTypes from 'prop-types'

const Form = ({data, handleSubmit, handleChange}) => {
    
    const {key} = data;

    return (
        <form id="app-form" onSubmit={handleSubmit}>
            <div>
                <input type="text" id="searchInput" name="searchInput" className="form-control form-control-lg"  placeholder="Ingresa el RNC" value={key} onChange={handleChange} autoComplete="off"></input>
            </div>
            <input className="btn btn-lg btn-block" type="submit" value="CONSULTAR"></input>
        </form>
    )
}

Form.propTypes = {
    data: PropTypes.object,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func
}

export default Form