import React from 'react';
import './Enlace.css'

const linksContainer = 'linksContainerExtra flex items-center min-h-[50px] font-pop text-slate-600 hover:text-slate-200 text-[1.5rem] border-[1px] border-slate-700 mx-[5vw] px-[25px] hover:bg-slate-600'

const Enlace = ({ url, texto }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
    <div className={linksContainer}>
        {texto}
    </div>
    </a>
  );
};

export default Enlace;
