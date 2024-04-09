import React, { useState } from 'react';
import Enlace from '../../components/Enlace/Enlace'
import './Enlaces.css'

import { FaPollH } from "react-icons/fa";   //  documentación
import { FaTools } from "react-icons/fa";   //  tools
import { MdFlipToFront } from "react-icons/md"; //  tools front end
import { MdFlipToBack } from "react-icons/md";  //  tools back end
import { SiFramework } from "react-icons/si";   //  frameworks
import { FaCss3 } from "react-icons/fa";    //  estilos
import { FaBookBookmark } from "react-icons/fa6";   //  learning
import { FaDatabase } from "react-icons/fa";    //  apis
import { FaRoad } from "react-icons/fa";    //  stuff

import { PiVideoFill } from "react-icons/pi";  //  tutoriales
import { MdArticle } from "react-icons/md"; //  artículos  

import { MdWorkHistory } from "react-icons/md"; //  portales de trabajo

import { FaCaretDown } from "react-icons/fa";   //  flecha ABAJO
import { FaCaretUp } from "react-icons/fa";     //  flecha ARRIBA
import { FaBullseye } from "react-icons/fa6";   //  bullseye


import { document, tools, toolsFrontend, toolsBackend, frameworks, estilos, learning, stuff, apis, tutoriales, articulos, portalesTrabajo } from '../../utils/links' // enlaces externos


const enlacesContainer = 'pt-[25px] bg-slate-800 min-h-[100vh] pb-[25px]'
const mainTitleTop = 'flex items-center justify-start italic font-pop bg-slate-800 text-slate-600 text-[2rem] border-[1px] border-slate-800 mx-[5vw] px-[25px] mb-[25px]'
const mainTitleMid = 'flex items-center justify-start italic font-pop bg-slate-800 text-slate-600 text-[2rem] border-[1px] border-slate-800 mx-[5vw] px-[25px] my-[25px]'
const linksTitle = 'flex items-center justify-between font-pop bg-slate-900 text-slate-600 text-[2rem] border-[1px] border-slate-700 mx-[5vw] px-[25px] hover:border-b-slate-600 cursor-pointer min-h-[75px]'
const icon = 'h-[25px] w-[25px] text-slate-600 mr-[25px]'
const titleName = 'flex items-center'
const spacer = 'flex min-h-[50px]'

const Enlaces = () => {
    
    const [sectionsVisibility, setSectionsVisibility] = useState({
        documentacion: false,
        herramientas: false,
        herramientasFront: false,
        herramientasBack: false,
        frameworks: false,
        estilos: false,
        learning: false,
        apis: false,
        stuff: false,
        tutoriales: false,
        articulos: false,
      });
    
    const toggleSection = (section) => {
    setSectionsVisibility({
      ...sectionsVisibility,
      [section]: !sectionsVisibility[section],
    });
  };

  return (
    <div className={enlacesContainer}>
        <div className={spacer}></div>

        {/* Sección 1 - Enlaces */}
        <div className={mainTitleTop}><FaBullseye className='mr-[10px]' />Enlaces</div>

        {/* DOCUMENTACION */}
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

        {/* FRAMEWORKS */}
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

        {/* HERRAMIENTAS */}
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

        {/* HERRAMIENTAS FRONT END */}
        <div className={linksTitle} onClick={() => toggleSection('herramientasFront')}>
            <div className={titleName}>
                <MdFlipToFront className={icon} />
                <h1>Herramientas Front-End</h1>
            </div>
            {(sectionsVisibility['herramientasFront']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['herramientasFront'] && toolsFrontend.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        {/* HERRAMIENTAS BACK END */}
        <div className={linksTitle} onClick={() => toggleSection('herramientasBack')}>
            <div className={titleName}>
                <MdFlipToBack className={icon} />
                <h1>Herramientas Back-End</h1>
            </div>
            {(sectionsVisibility['herramientasBack']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['herramientasBack'] && toolsBackend.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        {/* ESTILOS */}
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
        
        {/* LEARNING */}
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

        {/* API */}
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

        {/* STUFF */}
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


        {/* Sección 2 - Tutoriales */}
        <div className={mainTitleMid}><FaBullseye className='mr-[10px]' />Tutoriales</div>

        {/* VIDEO TUTORIALES */}
        <div className={linksTitle} onClick={() => toggleSection('tutoriales')}>
            <div className={titleName}>
                <PiVideoFill className={icon} />
                <h1>Video-tutoriales</h1>
            </div>
            {(sectionsVisibility['tutoriales']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['tutoriales'] && tutoriales.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        {/* ARTICULOS */}
        <div className={linksTitle} onClick={() => toggleSection('articulos')}>
            <div className={titleName}>
                <MdArticle className={icon} />
                <h1>Artículos</h1>
            </div>
            {(sectionsVisibility['articulos']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['articulos'] && articulos.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}


        {/* Sección 3 - Trabajo */}
        <div className={mainTitleMid}><FaBullseye className='mr-[10px]' />Trabajo</div>

        {/* PORTALES DE TRABAJO */}
        <div className={linksTitle} onClick={() => toggleSection('portalesTrabajo')}>
            <div className={titleName}>
                <MdWorkHistory className={icon} />
                <h1>Portales de trabajo</h1>
            </div>
            {(sectionsVisibility['portalesTrabajo']) ? <FaCaretUp /> : <FaCaretDown /> }
        </div>
        {sectionsVisibility['portalesTrabajo'] && portalesTrabajo.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

    </div>
  )
}

export default Enlaces;