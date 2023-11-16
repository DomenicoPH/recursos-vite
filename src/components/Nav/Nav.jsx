import React from 'react'
import '../../variables.css'
import { FaHouseUser } from "react-icons/fa";

const navContainer = 'flex justify-between bg-slate-900 min-h-[60px]'
const navMenuLogo = 'font-pop-light text-slate-200 text-[1.5rem] sm:mx-1'
const navBox = 'flex items-center'
const navBoxLink = 'flex items-center hover:cursor-pointer px-[10px] border-x-[1px] border-slate-900 hover:border-x-[1px] hover:border-slate-800 hover:bg-slate-800 transition-border duration-300'
const navMenuItems = 'flex items-center h-[100%] font-pop-light text-slate-200 text-[1.5rem] hover:cursor-pointer px-[10px] border-x-[1px] border-slate-900 hover:border-x-[1px] hover:border-slate-800 hover:bg-slate-800 transition-border duration-300'
const icon = 'h-[25px] w-[25px] text-white'

const Nav = () => {
  return (
    <div className={navContainer}>

        <div className={navBoxLink}>
            <FaHouseUser className={icon} />
            <h3 className={navMenuLogo}>Home</h3>
        </div>

        <div className={navBox}>
            <h3 className={navMenuItems}>Enlaces</h3>
            <h3 className={navMenuItems}>Portafolio</h3>
            <h3 className={navMenuItems}>Proyectos</h3>
        </div>

    </div>
  )
}

export default Nav;