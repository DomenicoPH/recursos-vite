import React from 'react'

const homeContainer = 'flex flex-col items-center justify-center font-pop text-white bg-slate-800 min-h-screen';

const gnomonoLogo = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712686579/Gnomono/Logo_bio_0001_am-az_ujsiki.png';
const gnomonoLogoContainerStyle = 'flex justify-center items-center rounded-full overflow-hidden'
const gnomonoLogoStyle = 'h-[250px] w-[250px] scale-110 filter grayscale-[100%] brightness-[70%] hover:grayscale-[0%] hover:brightness-[100%] transition-all duration-500 cursor-pointer';

const Home = () => {
  return (
    <div className={homeContainer}>
      <div className={gnomonoLogoContainerStyle}>
        <img src={gnomonoLogo} alt="Gnomono" className={gnomonoLogoStyle} />
      </div>
    </div>
  )
}

export default Home;