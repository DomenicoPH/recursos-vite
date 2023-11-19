import React from 'react'
import { IoIosCodeWorking } from "react-icons/io";

const portafolioContainer = 'flex flex-col items-center justify-center font-pop text-white bg-slate-800 min-h-[100vh]'
const icon = 'h-[100px] w-[100px]'

const Portafolio = () => {
  return (
    <div className={portafolioContainer}>
        <IoIosCodeWorking className={icon} />
        <p>próximamente... PORTAFOLIO</p>
    </div>
  )
}
export default Portafolio;