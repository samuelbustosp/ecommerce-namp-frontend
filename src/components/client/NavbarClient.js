import { FaSearch, FaShoppingCart,FaUser  } from "react-icons/fa";
import logo from "../../components/client/assets/logo-namp-bl.png"
import { Link } from "react-router-dom";
import { MdLocalShipping } from "react-icons/md";

const NavbarClient = ({toggleMenu }) => {
    return ( 
        <header className=" flex flex-col">
            <div className="bg-banner-not text-white poppins-light text-center text-sm p-1">
                <p className="flex items-center justify-center cursor-default">
                    <span className="mr-1"><MdLocalShipping /></span> 
                    ¡Envíos gratis en compras superiores a 
                    <span className="font-semibold">&nbsp;$30,000</span>!
                </p>
            </div>
            <div className="bg-nav flex items-center justify-between gap-3 p-4">
                <Link to={'/home'}className="p-2 rounded-sm">
                    <img src={logo} alt="logo-navbar" className="h-12 rounded-2xl ml-4 -m-4" />
                    <span className="sr-only">Toggle navigation</span>
                </Link>
                <form className="relative flex items-center w-1/2">
                    <input
                        type="text"
                        placeholder="¿Qué estas buscando?"
                        className="w-full p-2 border rounded-full border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent"
                    />
                    <button type="submit" className="absolute right-3 flex items-center justify-center h-full">
                        <FaSearch className="text-gray-500 text-lg" />
                    </button>
                </form>

                <div className='items-center flex gap-3 mr-8 text-white'>
                    <p href='/username' className="text-2xl"><FaUser/></p>
                    <Link to='/login' className="text-sm font-semibold leading-tight "style={{ lineHeight: '1.1' }}>
                        ¡Hola! Iniciá sesión <br /> 
                        <span className="font-normal leading-">O registrate gratis.</span>
                    </Link>
                    <div className="relative">
                        <Link to='/cart' className="text-2xl" style={{ lineHeight: '1.1' }}>
                        <FaShoppingCart/>
                        </Link>
                        <span className="absolute -top-2 -right-3.5 bg-blue-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            0 
                        </span>
                    </div>
                </div>
            </div>
            <div className=" bg-sub-nav text-white text-md p-2 ">
                    <div className='items-center poppins-regular flex gap-3 ml-8 justify-start'>
                        <button onClick={toggleMenu} className="hover:text-blue-700">
                            Categorías
                        </button>
                        <Link to='/combo' className="hover:text-blue-700 cursor-pointer">Combos</Link>
                    </div>
            </div>
                
        </header>
     );
}
export default NavbarClient;