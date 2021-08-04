import { useState } from 'react'

export const useFetchData = () => {    

    const [progress, setProgress] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [data, setData] = useState({
        key: '',
        value: 0,
        type: '', // alert_info, alert_danger
        button: false, // badge, sticker, text
        buttonText: '',
        sticker: false,
        stickerText: '',
        title: '',
        subtitle: '',
        text: '',
        icon: '',
        image: ''
    })    

    const [info, setInfo] = useState({    
        type: "",    
        percent: 0,
        strokeValue: 0,
        salary: "",
        description: ""               
    })    

    // async componentDidMount(){
    //     await this.Api()
    // }    

    const Api = async () => {
        let response = '';

        if(data.key !== ""){
            response = await fetch(`https://webapi.mt.gob.do/api/Consulta?documento=${data.key}`)
            // let response = await fetch('https://webapi.mt.gob.do/api/Consulta?documento=401007363')            
        }

        // console.log(response)
        const {status} = response;

        switch (status) {
            case 400:

                setData({
                    key: data.key,
                    value: 0,
                    type: 'alert_danger', 
                    title: '',
                    subtitle: '',
                    text: 'La empresa no posee registros en la planilla de personal fijo del año actual.',
                    button: false,
                    buttonText: 'Volver a consultar',
                    sticker: false,
                    stickerText: '',                    
                    icon: '',
                    image: '',

                })

                setProgress(false)
                setShowResult(true)
                handleReset()

                break;
            case 200:               

                setProgress(false)
                setShowResult(false)

                let result = await response.json()

                const {Valor, Descripcion, NombreComercial, RazonSocial } = result;                

                setData({
                    key: data.key,
                    value: Valor,
                    type: 'alert_info',
                    title: RazonSocial,
                    subtitle: '',
                    text: 'La empresa no posee registros en la planilla de personal fijo del año actual.',
                    button: false,
                    buttonText: '',
                    sticker: true,
                    stickerText: Descripcion,                       
                    icon: '',
                    image: ''                                 
                })

                switch (Descripcion) {
                    case "Micro-empresas":
                        setInfo({
                            type: Descripcion,
                            percent: 10.9,
                            strokeValue: 392.04,
                            salary: "RD$11,900",
                            description: "Hasta 10 trabajadores o ventas brutas de hasta 8 millones de pesos anuales."
                        })
                        break;
                    case "Pequeñas empresas":
                        setInfo({
                            type: Descripcion,
                            percent: 20.2,
                            strokeValue: 351.12,
                            salary: "RD$12,900",
                            description: "11 a 50 trabajadores o ventas brutas de más de 8 hasta 54 millones de pesos anuales."
                        })
                        break;
                    case "Medianas empresas":
                        setInfo({
                            type: Descripcion,
                            percent: 59,
                            strokeValue: 180.4,
                            salary: "RD$19,250",
                            description: "51 a 150 trabajadores o ventas brutas de 54 hasta 202 millones de pesos anuales."
                        })
                        break;
                    case "Grandes empresas":
                        setInfo({
                            type: Descripcion,
                            percent: 19.3,
                            strokeValue: 355.08,
                            salary: "RD$21,000",
                            description: "Mas de 150 trabajadores o ventas brutas de más de 202 millones de pesos anuales."
                        })
                        break;
                    default:
                        break;
                }
            
                setProgress(true) // show progress bar
                setShowResult(true) // show result

                handleReset() // reset input

                break;
            default:
                break;
        }           
    }

    const handleChange = (e) => {
        setProgress(false) // hide progress bar on change
        setShowResult(false) // hide result on change

        let rnc = e.target.value.replace(/[&/\\#,+()$~%.'":*?<>{} ]/g, ''); // format input
        rnc = rnc.replace('-', '');
        
        setData({
            key: rnc
        })
    }    

    const handleSubmit = (e) => {          
        Api()
        e.preventDefault();
    }    

    const handleReset = () => {       
        const input = document.querySelector('#searchInput'); // input element
        input.value = ""; // clear input
    }

    return [data, info, showResult, progress, handleChange, handleSubmit, handleReset];
    
}
