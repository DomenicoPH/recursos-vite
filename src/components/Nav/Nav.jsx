import React from 'react'
import { Link } from 'react-router-dom';
import '../../variables.css'
import { FaHouseUser } from "react-icons/fa";

/*estilos*/
const navContainer = 'fixed flex justify-between bg-slate-900 min-h-[50px] min-w-[100vw] px-[5vw]'
const navMenuLogo = 'font-popxlight text-slate-200 text-[1.2rem] sm:mx-1'
const navBox = 'flex items-center'
const navBoxLink = 'flex items-center hover:cursor-pointer px-[10px] border-x-[1px] border-slate-900 hover:border-x-[1px] hover:border-slate-800 hover:bg-slate-800 transition-border duration-300'
const navMenuItems = 'flex items-center h-[100%] font-popxlight text-slate-200 text-[1.2rem] hover:cursor-pointer px-[10px] border-x-[1px] border-slate-900 hover:border-x-[1px] hover:border-slate-800 hover:bg-slate-800 transition-border duration-300'
const icon = 'h-[20px] w-[20px] text-white mr-[5px]'

const Nav = () => {
  return (
    <div className={navContainer}>

        <Link to='/' className='flex'>
            <div className={navBoxLink}>
                <FaHouseUser className={icon} />
                <h3 className={navMenuLogo}>Home</h3>
            </div>
        </Link>

        <div className={navBox}>
            <Link to='/enlaces' className={navMenuItems}>
                <h3>Enlaces</h3>
            </Link>
            
            <Link to='/Portafolio' className={navMenuItems}>
                <h3>Portafolio</h3>
            </Link>

            <Link to='/Proyectos' className={navMenuItems}>
                <h3>Proyectos</h3>
            </Link>
            
        </div>

    </div>
  )
}

export default Nav;