import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiFileUserFill } from "react-icons/ri";
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

          <a href="https://drive.google.com/file/d/1XPl71zD77enO1dYyGSJyJYm-kBt9mjoj/view" target='blank'>
            <div className={style.socialMedia}>
              <RiFileUserFill className='mr-[10px]' />
              CV
            </div>
          </a>

          <a href="https://drive.google.com/file/d/1Mo9bRfaU7c6AX8MiDhg8FmgqeinsHihA/view?usp=sharing" target='blank'>
            <div className={style.socialMedia}>
              <RiFileUserFill className='mr-[10px]' />
              Portfolio
            </div>
          </a>

          <a href="https://www.talent.soyhenry.com/app/me" target='blank'>
            <div className={style.socialMedia}>
              <RiFileUserFill className='mr-[10px]' />
              H Talent
            </div>
          </a>

        </div>

        <div className={style.section}>

        </div>
    </div>
  )
}
export default Portafolio;