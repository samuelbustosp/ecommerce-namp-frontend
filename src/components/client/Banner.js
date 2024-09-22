import React from "react";
import bannerImg from "./assets/banner-wine.jpg"; 

const Banner = () => {
  return (
    <div className="">
        <div
        className="relative h-64 bg-cover bg-center rounded-2xl shadow-lg mb-4 overflow-hidden transition-all duration-300"
        style={{
          backgroundImage: `url(${bannerImg})`, backgroundPosition: 'center', backgroundSize: '100%',transition: 'background-size 0.3s ease-in-out'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundSize = '50%'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundSize = '100%'}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center rounded-2xl p-4 hover:bg-opacity-20">
                <div className="pl-10">
                    <h2 className="text-white text-3xl md:text-5xl poppins-bold">Nuestra Colección</h2>
                    <p className="text-white text-lg poppins-light">Vino Malbec de alta calidad.</p>
                    <button className="bg-white p-2 rounded-2xl text-sm poppins-bold text-gray-700 shadow-md mt-2">Comprar</button>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Banner;