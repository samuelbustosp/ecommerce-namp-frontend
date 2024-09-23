import React, { useState } from "react";
import CategoryMenuContainer from "../../components/client/category/CategoryMenuContainer";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductContainer from "../../components/client/product/ProductContainer";


const CategoryListPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-white rounded-t-xl border shadow-lg flex items-center justify-center p-4 gap-2">
                <h1 className="poppins-bold text-color-nav text-3xl">Categorías</h1>
                <button onClick={toggleMenu} className="text-blue-900 text-xl">
                    {isMenuOpen==true ? (<FaMinus/>):( <FaPlus/>) }
                </button>
            </div>
            <CategoryMenuContainer isMenuOpen={isMenuOpen} /> 
            <div className="container">
                <ProductContainer/>
            </div>
        </div>
    );
};

export default CategoryListPage;