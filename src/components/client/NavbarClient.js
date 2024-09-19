import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const NavbarClient = ({toggleMenu, isMenuOpen }) => {
    return ( 
        <header className="bg-nav flex items-center justify-between py-4 z-10">
            <span className="cursor-pointer p-2">
                <HiMenu className="text-white w-6 h-6" />
                <span className="sr-only">Toggle navigation</span>
            </span>
            <nav className=" text-white font-light p-2 ">
                <div className='items-center flex gap-3 mr-8'>
                    <p href='/' >Inicio</p>
                    <p href='/username' className="">Contacto</p>
                    <button onClick={toggleMenu}>
                        Productos
                    </button>
                </div>
            </nav>
        </header>
     );
}
export default NavbarClient;