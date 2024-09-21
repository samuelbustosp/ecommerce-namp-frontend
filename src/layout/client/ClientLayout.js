import { Outlet } from "react-router-dom";
import NavbarClient from "../../components/client/NavbarClient"
import CategoryMenuContainer from "../../components/client/category/CategoryMenuContainer";
import { useState } from "react";


const ClientLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return ( 
        <div className="ClientLayout h-screen bg-gray-100">
            <NavbarClient toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
            <CategoryMenuContainer isMenuOpen={isMenuOpen} />
            <div className="flex-grow p-4 bg-page overflow-auto">
                <Outlet />
            </div>
        </div>
    );

    
}
 
export default ClientLayout;