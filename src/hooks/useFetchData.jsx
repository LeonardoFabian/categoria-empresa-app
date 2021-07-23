import {useState} from 'react'

export const useFetchData = () => {

    //     constructor(props) {
    //     super(props);
    //     this.state = {
    //         document: '',
    //         valor: '',
    //         descripcion: '',
    //         nombreComercial: '',
    //         razonSocial: ''
    //     }
    // }

    const [empresa, setEmpresa] = useState({
        rnc: '',
        valor: '',
        descripcion: '',
        nombreComercial: '',
        razonSocial: ''
    })

    const [progress, setProgress] = useState(false)

    // async componentDidMount(){
    //     await this.Api()
    // }

    const Api = async () => {


        let response = '';

        if(empresa.rnc !== ""){
            response = await fetch(`https://webapi.mt.gob.do/api/Consulta?documento=${empresa.rnc}`)
            // let response = await fetch('https://webapi.mt.gob.do/api/Consulta?documento=401007363')
        }
        setProgress(false)

        let data = await response.json()

        console.log(data.RazonSocial)

        setEmpresa({
            rnc: empresa.rnc,
            valor: data.Valor,
            descripcion: data.Descripcion,
            nombreComercial: data.NombreComercial,
            razonSocial: data.RazonSocial
        })

        setProgress(true) // hide progress bar after loading
    }

    const handleInput = event => {
        setEmpresa({
            rnc: event.target.value
        })
    }

    const handleSubmit = event => {
        // var prueba = empresa.rnc
        // console.log(prueba)
        Api()
        event.preventDefault();
    }

    return [empresa, progress, handleInput, handleSubmit];
    
}


