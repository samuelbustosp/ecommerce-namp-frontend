import React from "react";
import ImgCat from "./assets/categories-card.jpeg"
import ImgCombo from "./assets/combos-card.jpg"
import { Link } from "react-router-dom";

const PromotionalCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
      
        <div 
          className="relative h-64 bg-cover bg-center rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-95" 
          style={{ backgroundImage: `url(${ImgCat})` }}
        > 
        <Link to='/categoria'>
          <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-35 flex items-center justify-center rounded-2xl">
            <h2 className="text-white text-2xl md:text-4xl poppins-bold">Categorías</h2>
          </div>
        </Link>
          
        </div>
        
        <div className="relative h-64 bg-cover bg-center rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-95"
          style={{ backgroundImage: `url(${ImgCombo})` }}>
            <Link to='/combos'>
            <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-35 flex items-center rounded-2xl justify-center">
              <h2 className="text-white text-2xl md:text-4xl poppins-bold">Combos</h2>
            </div>
            </Link>
        </div>
      
    </div>
  );
};

export default PromotionalCards;
