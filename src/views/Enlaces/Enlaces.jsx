import React, { useState } from 'react';
import Enlace from '../../components/Enlace/Enlace'
import { FaPollH } from "react-icons/fa";   //  documentación
import { FaTools } from "react-icons/fa";   //  tools
import { SiFramework } from "react-icons/si";   //  frameworks
import { FaCss3 } from "react-icons/fa";    //  estilos
import { FaBookBookmark } from "react-icons/fa6";   //  learning
import { FaDatabase } from "react-icons/fa";    //  apis
import { FaRoad } from "react-icons/fa";    //  stuff
import { FaCaretDown } from "react-icons/fa";   //  flecha ABAJO
import { FaCaretUp } from "react-icons/fa";     //  flecha ARRIBA
import { FaBullseye } from "react-icons/fa6";   //  bullseye


import { document, tools, frameworks, estilos, learning, stuff, apis } from '../../utils/links' // enlaces externos


const enlacesContainer = 'pt-[25px] bg-slate-800 min-h-[100vh] pb-[25px]'
const mainTitle = 'flex items-center justify-start italic font-pop bg-slate-800 text-slate-600 text-[2rem] border-[1px] border-slate-800 mx-[5vw] px-[25px] mb-[25px]'
const linksTitle = 'flex items-center justify-between font-pop bg-slate-900 text-slate-600 text-[2rem] border-[1px] border-slate-700 mx-[5vw] px-[25px] hover:border-b-slate-600 cursor-pointer min-h-[75px]'
const icon = 'h-[25px] w-[25px] text-slate-600 mr-[25px]'
const titleName = 'flex items-center'

const Enlaces = () => {
    
    const [sectionsVisibility, setSectionsVisibility] = useState({
        documentacion: false,
        herramientas: false,
        frameworks: false,
        estilos: false,
        learning: false,
        apis: false,
        stuff: false,
      });
    
    const toggleSection = (section) => {
    setSectionsVisibility({
      ...sectionsVisibility,
      [section]: !sectionsVisibility[section],
    });
  };

  return (
    <div className={enlacesContainer}>

        <div className={mainTitle}><FaBullseye className='mr-[10px]' />Enlaces</div>

        <div className={linksTitle} onClick={() => toggleSection('documentacion')}>
            <div className={titleName}>
                <FaPollH className={icon} />
                <h1>Documentación</h1>
            </div>

            {(sectionsVisibility['documentacion']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['documentacion'] && document.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle} onClick={() => toggleSection('herramientas')}>
            <div className={titleName}>
                <FaTools className={icon} />
                <h1>Herramientas</h1>
            </div>
            {(sectionsVisibility['herramientas']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['herramientas'] && tools.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle} onClick={() => toggleSection('frameworks')}>
            <div className={titleName}>
                <SiFramework className={icon} />
                <h1>Frameworks</h1>
            </div>
            {(sectionsVisibility['frameworks']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['frameworks'] && frameworks.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle} onClick={() => toggleSection('estilos')}>
            <div className={titleName}>
                <FaCss3 className={icon} />
                <h1>Estilos</h1>
            </div>
            {(sectionsVisibility['estilos']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['estilos'] && estilos.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}
        
        <div className={linksTitle} onClick={() => toggleSection('learning')}>
            <div className={titleName}>
                <FaBookBookmark className={icon} />
                <h1>Learning</h1>
            </div>
            {(sectionsVisibility['learning']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['learning'] && learning.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle} onClick={() => toggleSection('apis')}>
            <div className={titleName}>
                <FaDatabase className={icon} />
                <h1>API</h1>
            </div>
            {(sectionsVisibility['apis']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['apis'] && apis.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle} onClick={() => toggleSection('stuff')}>
            <div className={titleName}>
                <FaRoad className={icon} />
                <h1>Stuff</h1>
            </div>
            {(sectionsVisibility['stuff']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['stuff'] && stuff.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

    </div>
  )
}

export default Enlaces;