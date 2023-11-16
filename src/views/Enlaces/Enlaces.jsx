import React from 'react'
import Enlace from '../../components/Enlace/Enlace'

const enlacesContainer = 'bg-slate-800 min-h-[100vh]'
const linksTitle = 'font-pop bg-slate-900 text-slate-300 text-[1.5rem] border-[1px] border-slate-700 mx-[5vw] px-[25px]'
const linksContainer = 'font-pop text-slate-300 text-[1.5rem] border-[1px] border-slate-700 mx-[5vw] px-[25px]'

const document = [
    { url: 'https://www.w3schools.com/', texto: 'W3Schools.com' },
    { url: 'https://developer.mozilla.org/es/', texto: 'Mozilla Developer Network' },
    { url: 'https://desarrolloweb.com/', texto: 'Desarrolloweb.com' },
    { url: 'https://nodejs.org/es/docs', texto: 'Node JS' },
    { url: 'https://developer.mozilla.org/es/', texto: 'Mozilla Developer Network' },
    { url: 'https://developer.mozilla.org/es/', texto: 'Mozilla Developer Network' },
    { url: 'https://developer.mozilla.org/es/', texto: 'Mozilla Developer Network' },
    { url: 'https://developer.mozilla.org/es/', texto: 'Mozilla Developer Network' },
    { url: 'https://developer.mozilla.org/es/', texto: 'Mozilla Developer Network' },
  
];
const tools = [
    { url: 'https://chat.openai.com/', texto: 'Chat-GPT' },
    { url: 'https://jsonplaceholder.typicode.com/', texto: 'JSON Placeholder' },
    { url: 'https://www.postman.com/', texto: 'Postman' },
    { url: 'https://insomnia.rest/', texto: 'Insomnia' },
];
const frameworks = [
    { url: 'https://es.react.dev/', texto: 'React' },
    { url: 'https://redux.js.org/', texto: 'Redux' },
    
]

const Enlaces = () => {
  return (
    <div className={enlacesContainer}>

        <div className={linksTitle}>
            <h1>Documentación</h1>
        </div>
        {document.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle}>
            <h1>Herramientas</h1>
        </div>
        {tools.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle}>
            <h1>Librerías / Frameworks</h1>
        </div>
        {frameworks.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

    </div>
  )
}

export default Enlaces;