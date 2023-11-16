import React from 'react';

const linksContainer = 'font-pop text-slate-300 text-[1.5rem] border-[1px] border-slate-700 mx-[5vw] px-[25px] hover:bg-slate-900'

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
