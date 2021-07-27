
import React from 'react'
import PropTypes from 'prop-types'

const Form = ({data, handleSubmit, handleChange}) => {
    

    return (
        <form id="app-form" onSubmit={handleSubmit}>
            <div>
                <input id="searchInput" name="searchInput" className="form-control form-control-lg" type="text" placeholder="Ingresa el RNC ej.: 401007363" value={data.key} onChange={handleChange} autoComplete="off"></input>
            </div>
            <input className="btn btn-lg btn-block" type="submit" value="CONSULTAR"></input>
        </form>
    )
}

Form.propTypes = {
    
}

export default Form

// class Form extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             document: '',
//             valor: '',
//             descripcion: '',
//             nombreComercial: '',
//             razonSocial: ''
//         }
//     }

//     // async componentDidMount(){
//     //     await this.Api()
//     // }

//     Api = async () => {
//         let response = await fetch(`https://webapi.mt.gob.do/api/Consulta?documento=${this.state.document}`)
//         // let response = await fetch('https://webapi.mt.gob.do/api/Consulta?documento=401007363')
//         let data = await response.json()

//         console.log(data.RazonSocial)

//         this.setState({
//             valor: data.Valor,
//             descripcion: data.Descripcion,
//             nombreComercial: data.NombreComercial,
//             razonSocial: data.RazonSocial
//         })
//     }

//     handleInput = event => {
//         this.setState({
//             document: event.target.value
//         })
//     }

//     handleSubmit = event => {
//         var jeje = this.state.document
//         console.log(jeje)
//         this.Api()
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form id="app-form" onSubmit={this.handleSubmit}>
//                 <div>
//                     <input className="form-control form-control-lg" type="text" placeholder="Ingresa el RNC o Razón Social" value={this.state.document} onChange={this.handleInput}></input>
//                 </div>
//                 <input className="btn btn-lg btn-block" type="submit" value="CONSULTAR"></input>
//             </form>
//         )
//     }
// }

// export default Form
