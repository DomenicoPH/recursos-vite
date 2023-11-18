import React from 'react'
import Enlace from '../../components/Enlace/Enlace'
import { FaPollH } from "react-icons/fa";   //documentación
import { FaTools } from "react-icons/fa";   //tools
import { SiFramework } from "react-icons/si";   //frameworks
import { FaCss3 } from "react-icons/fa";    //estilos
import { FaBookBookmark } from "react-icons/fa6";   //learning
import { FaDatabase } from "react-icons/fa";    //apis
import { FaRoad } from "react-icons/fa";    //stuff

const enlacesContainer = 'pt-[25px] bg-slate-800 min-h-[100vh] pb-[25px]'
const linksTitle = 'flex items-center font-pop bg-slate-900 text-slate-600 text-[2rem] border-[1px] border-slate-700 mx-[5vw] px-[25px]'
const icon = 'h-[25px] w-[25px] text-slate-600 mr-[25px]'

const document = [
    { url: 'https://www.w3schools.com/', texto: 'W3Schools.com' },
    { url: 'https://developer.mozilla.org/es/', texto: 'Mozilla Developer Network' },
    { url: 'https://desarrolloweb.com/', texto: 'Desarrolloweb.com' },
    { url: 'https://nodejs.org/es/docs', texto: 'Node JS' },
    { url: 'https://expressjs.com/es/', texto: 'Express JS'},
    { url: 'https://sequelize.org/docs/v6/', texto: 'Sequelize' },
    { url: 'https://www.mongodb.com/es', texto: 'MongoDB' },
    { url: 'https://www.postgresql.org/docs/current/index.html', texto: 'PostgreSQL' },
    { url: 'https://docs.npmjs.com/', texto: 'NPM JS' },
    { url: 'https://webpack.js.org/', texto: 'Webpack JS' },
    { url: 'https://www.jetbrains.com/help/idea/remote-development-overview.html', texto: 'Remote Development Oveview *' },
    { url: 'https://www.bigocheatsheet.com/', texto: 'Big O' },
    { url: 'https://www.atlassian.com/es/agile/scrum', texto: 'Scrum | Metodologías ágiles' },
    { url: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf', texto: 'VSC shortcuts'}
];
const tools = [
    { url: 'https://chat.openai.com/', texto: 'Chat-GPT' },
    { url: 'https://jsonplaceholder.typicode.com/', texto: 'JSON Placeholder' },
    { url: 'https://www.postman.com/', texto: 'Postman' },
    { url: 'https://insomnia.rest/', texto: 'Insomnia' },
    { url: 'https://fontawesome.com/', texto: 'Font Awesome' },
    { url: 'https://boxicons.com/', texto: 'Box Icons' },
    { url: 'https://react-icons.github.io/react-icons/', texto: 'React Icons' },
    { url: 'https://lenguajehtml.com/', texto: 'Lenguaje HTML' },
    { url: 'https://www.figma.com/', texto: 'Figma'},
    { url: 'https://replit.com/', texto: 'Replit' },
    { url: 'https://convertio.co/es/', texto: 'Convertio'},
    { url: 'https://www.pdfescape.com/', texto: 'PDF Escape'},
    { url: 'https://onecompiler.com/', texto: 'One Compiler'},
    { url: 'https://www.hostinger.com/', texto: 'Hostinger'},
    { url: 'https://www.netlify.com/', texto: 'Netlify'},
];
const frameworks = [
    { url: 'https://es.react.dev/', texto: 'React' },
    { url: 'https://redux.js.org/', texto: 'Redux' },
    { url: 'https://nextjs.org/', texto: 'NextJS' },
    { url: 'https://www.docker.com/', texto: 'Docker' },
];
const estilos = [
    { url: 'https://tailwindcss.com/', texto: 'Tailwind' },
    { url: 'https://getbootstrap.com/', texto: 'Bootstrap' },
    { url: 'https://lesscss.org/', texto: 'Less' },
    { url: 'https://sass-lang.com/', texto: 'Sass' },
    { url: 'https://cssbuttons.app/', texto: 'CSS Buttons' },
    { url: 'https://css-tricks.com/', texto: 'CSS Tricks' },
    { url: 'https://colorbox.io/', texto: 'Color Box' },
    { url: 'https://colorhunt.co/', texto: 'Color Hunt' },
    { url: 'https://flatuicolors.com/', texto: 'Flat UI Colors' },
    { url: 'https://copy-paste-css.com/', texto: 'Copy-Paste CSS' },
    { url: 'https://palettte.app/', texto: 'Palette' },
    { url: 'https://cssgenerator.org/', texto: 'CSS Generator' },
    { url: 'https://necolas.github.io/normalize.css/', texto: 'Normalize' },
    { url: 'https://www.browserstack.com/guide/what-are-css-and-media-query-breakpoints', texto: 'Media Query Breakpoints' },
    { url: 'https://necolas.github.io/normalize.css/', texto: 'Normalize' },
];
const learning = [
    { url: 'https://codingpotions.com/', texto: 'Coding Potions' },
    { url: 'https://supermarkupworld.com/', texto: 'Super Markup World' },
    { url: 'https://flexboxfroggy.com/#es', texto: 'FlexBox Froggy' },
    { url: 'http://www.flexboxdefense.com/', texto: 'FlexBox Defense' },
    { url: 'https://flukeout.github.io/', texto: 'Fluke out' },
    { url: 'https://cssbattle.dev/', texto:'CSS Battle' },
    { url: 'https://tutorialmarkdown.com/', texto: 'Tutorial Mark Down' },
    { url: 'https://www.thepunctuationguide.com/index.html', texto: 'The Punctuation Guide'},
    { url: 'https://www.tutorialspoint.com/index.htm', texto: 'Tutorials Point' },
    { url: 'https://www.typescripttutorial.net/', texto: 'TypeScript Tutorial' },
    { url: 'https://www.hackerrank.com/', texto: 'HackerRank' },
    { url: 'https://leetcode.com/', texto: 'Leet Code' },
    { url: 'https://exercism.org/', texto: 'Exercism' },
    { url: 'https://adventjs.dev/es', texto: 'Advent JS' },
    { url: 'https://www.codewars.com/', texto: 'Code Wars' },
    { url: 'https://levelup.video/', texto: 'Level Up Tutorials' },
    { url: 'https://www.codecademy.com/', texto: 'Code Academy' },
    { url: 'https://www.academlo.com/', texto: 'Academlo' },
    { url: 'https://laravelers.com/', texto: 'Laravelers' },
    { url: 'https://www.soyhenry.com/', texto: 'Soy Henry' },
];
const stuff = [
    { url: 'https://www.humblebundle.com/', texto: 'Humble Bundle'},
    { url: 'https://manz.dev/', texto: 'Manz Dev'},
    { url: 'https://midu.dev/', texto: 'Midu Dev'},
    { url: 'https://moure.dev/', texto: 'Moure Dev'},
];
const apis = [
    { url: 'https://rickandmortyapi.com/', texto: 'Rick & Morty API'},
    { url: 'https://superheroapi.com/', texto: 'Super Hero API'},
    { url: 'https://swapi.dev/', texto: 'Star Wars API'},
    { url: 'https://pokeapi.co/', texto: 'Pokemon API'},
]

const Enlaces = () => {
  return (
    <div className={enlacesContainer}>

        <div className={linksTitle}>
            <FaPollH className={icon} />
            <h1>Documentación</h1>
        </div>
        {document.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle}>
            <FaTools className={icon} />
            <h1>Herramientas</h1>
        </div>
        {tools.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle}>
            <SiFramework className={icon} />
            <h1>Librerías / Frameworks</h1>
        </div>
        {frameworks.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle}>
            <FaCss3 className={icon} />
            <h1>Estilos</h1>
        </div>
        {estilos.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}
        
        <div className={linksTitle}>
            <FaBookBookmark className={icon} />
            <h1>Learning</h1>
        </div>
        {learning.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle}>
            <FaDatabase className={icon} />
            <h1>API</h1>
        </div>
        {apis.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

        <div className={linksTitle}>
            <FaRoad className={icon} />
            <h1>Stuff</h1>
        </div>
        {stuff.map((enlace, index) => (
            <Enlace key={index} url={enlace.url} texto={enlace.texto} />
        ))}

    </div>
  )
}

export default Enlaces;