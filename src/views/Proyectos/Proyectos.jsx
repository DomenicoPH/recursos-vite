import React from 'react'
import { IoIosCodeWorking } from "react-icons/io";

const proyectosContainer = 'flex flex-col items-center justify-center font-pop text-white bg-slate-800 min-h-[100vh]'
const icon = 'h-[100px] w-[100px]'

const Proyectos = () => {
  return (
    <div className={proyectosContainer}>
        <IoIosCodeWorking className={icon} />
        <p>próximamente... PROYECTOS</p>
    </div>
  )
}
export default Proyectos;