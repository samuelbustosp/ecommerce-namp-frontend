
import { HiMenu } from "react-icons/hi";

const NavbarComponent = ({toggleSidebar}) => {
    
    const handleClick = () => {
        toggleSidebar();
    };
    
    
    return ( 
        <header className="bg-nav flex items-center justify-between py-4 z-10">
            <span onClick={handleClick} className="cursor-pointer p-2">
                <HiMenu className="text-white w-6 h-6" />
                <span className="sr-only">Toggle navigation</span>
            </span>
            
            <nav className=" text-white font-light p-2 ">
                <div className='items-center flex gap-3 mr-8'>
                    <a href='/' className=''>Inicio</a>
                    <a href='/category/{id}'>Productos</a>
                    <a href='/contact'>Contacto</a>
                </div>
            </nav>
        </header>
     );
}
 
export default NavbarComponent;