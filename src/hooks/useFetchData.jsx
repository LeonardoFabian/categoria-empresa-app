import {useState} from 'react'

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
        image: '',

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

        console.log(response)

        switch (response.status) {
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

                setData({
                    key: data.key,
                    value: result.Valor,
                    type: 'alert_info',
                    title: result.RazonSocial,
                    subtitle: '',
                    text: 'La empresa no posee registros en la planilla de personal fijo del año actual.',
                    button: false,
                    buttonText: '',
                    sticker: true,
                    stickerText: result.Descripcion,                       
                    icon: '',
                    image: ''                                 
                })
            
                setProgress(true)
                setShowResult(true)

                handleReset()

                break;
            default:
                break;
        }
        
         // hide progress bar after loading
    }

    const handleChange = event => {
        setProgress(false)
        setShowResult(false)
        setData({
            key: event.target.value
        })
    }

    const handleSubmit = event => {
        // var prueba = empresa.rnc
        // console.log(prueba)
        Api()
        event.preventDefault();
        // console.log(event)
        // event.target.reset();
    }    

    const handleReset = () => {       
        const input = document.querySelector('#searchInput');
        input.value = "";
        // setData({key: ""})
        // setShowResult(false)
    }

    return [data, showResult, progress, handleChange, handleSubmit, handleReset];
    
}


