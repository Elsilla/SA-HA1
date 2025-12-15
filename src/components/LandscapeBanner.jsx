import React from 'react'
import japanLandscape from "@/assets/japan-landscape.jpg";

const LandscapeBanner = () => {
  return (
    <div className="relative mb-16 h-64 overflow-hidden rounded-2xl shadow-xl animate-fade-in">
      <img
        src={japanLandscape}
        alt="Paisaje de Japón con cerezos"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-primary/40 backdrop-blur-[1px]">
        <div className="text-center">
          <h2 className="google-font-text mb-2 text-4xl !font-bold text-white drop-shadow-lg md:text-5xl">
            宝石 - HOSEKI
          </h2>
          <p className="google-font-text text-xl text-white/90 drop-shadow-md">
            あなたのものはたり、あなたのほうせき - Tu historia, tu joya
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandscapeBanner
