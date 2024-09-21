import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../components/client/assets/logo-namp-bl.png"
import { Link } from "react-router-dom";

const NavbarClient = ({toggleMenu }) => {
    return ( 
        <header className="bg-nav flex items-center gap-2 py-4 justify-between">
            <div className="flex items-center gap-3">
                <Link to={'/home'}className="p-2 rounded-sm">
                    <img src={logo} alt="logo-navbar" className="h-12 rounded-2xl ml-4 -m-4" />
                    <span className="sr-only">Toggle navigation</span>
                </Link>
                <nav className=" text-white text-lg font-light p-2">
                    <div className='items-center poppins-semibold flex gap-3 mr-8'>
                        <button onClick={toggleMenu} className="hover:text-blue-700">
                            Categorías
                        </button>
                        <p href='/username' className="hover:text-blue-700 cursor-pointer">Combos</p>
                    </div>
                </nav>
            </div>
            <div className='items-center flex gap-3 mr-8 text-white'>
                <p href='/' >Username</p>
                <p href='/username' className="text-3xl"><FaUserCircle/></p>
            </div>
                
        </header>
     );
}
export default NavbarClient;