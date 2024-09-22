import React from "react";
import ImgCat from "./assets/categories-card.jpeg"
import ImgCombo from "./assets/combos-card.jpg"

const PromotionalCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
  
      <div className="relative h-64 bg-cover bg-center rounded-2xl shadow-lg" 
        style={{ backgroundImage: `url(${ImgCat})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-2xl">
          <h2 className="text-white text-2xl md:text-4xl poppins-bold">Categorías</h2>
        </div>
      </div>
      
      <div className="relative h-64 bg-cover bg-center rounded-2xl shadow-lg"
        style={{ backgroundImage: `url(${ImgCombo})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center rounded-2xl justify-center">
          <h2 className="text-white text-2xl md:text-4xl poppins-bold">Combos</h2>
        </div>
      </div>
    </div>
  );
};

export default PromotionalCards;
