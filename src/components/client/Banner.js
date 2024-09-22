import React from "react";
import bannerImg from "./assets/banner-wine.jpg"; // Asegúrate de tener una imagen adecuada

const Banner = () => {
  return (
    <div className="px-4">
        <div
        className="relative h-64 bg-cover bg-center rounded-2xl shadow-lg mb-4"
        style={{ backgroundImage: `url(${bannerImg})`, backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center rounded-2xl p-4">
                <div>
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