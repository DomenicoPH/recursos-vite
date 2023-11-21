import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import style from './Portafolio.module.css'

const portafolioContainer = 'flex flex-col items-center justify-center font-pop text-white bg-slate-800 min-h-[100vh]'

const Portafolio = () => {
  return (
    <div className={portafolioContainer}>
        <div className={style.section}>

        </div>

        <div className={style.section}>
          <a href="https://github.com/DomenicoPH" target='blank'>
            <div className={style.socialMedia}>
              <FaGithub className='mr-[10px]' />
              Github
            </div>
          </a>

          <a href="https://www.instagram.com/gnomono/" target='blank'>
            <div className={style.socialMedia}>
              <FaInstagram className='mr-[10px]' />
              Instagram
            </div>
          </a>

          <a href="https://www.linkedin.com/in/domenico-pagano-hildebrandt/" target='blank'>
            <div className={style.socialMedia}>
              <FaLinkedin className='mr-[10px]' />
              LinkedIn
            </div>
          </a>
        </div>

        <div className={style.section}>

        </div>
    </div>
  )
}
export default Portafolio;