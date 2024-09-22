import { Sidebar } from "flowbite-react";
import { MdFilterList } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { IoMdHelpCircle } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { HiChartPie,HiShoppingBag} from "react-icons/hi";
import logoNav from "./assets/logo-nav1.png"


const SidebarComponent = ({isOpen}) => {
    const customTheme = {
        root: {
          base: 'bg-side',
          inner: 'bg-side'
        }
    } 
    return ( 
        <div className="h-screen">
            <div className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden h-screen bg-side`}>
                <Sidebar theme={customTheme} aria-label="Sidebar with content separator example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <img src={logoNav} alt="Logo navbar" className="w-24 ml-auto mr-auto mt-1 mb-2"></img>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                        <Sidebar.Item href="/dashboard" icon={() => <HiChartPie className="text-white w-6 h-5" />} className="text-white hover:bg-black hover:bg-opacity-50">
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="/products" icon={() => <HiShoppingBag className="text-white w-6 h-5" />} className="text-white hover:bg-black hover:bg-opacity-50">
                            Productos
                        </Sidebar.Item>
                        <Sidebar.Item href="/categories" icon={() => <BiSolidCategory className="text-white w-6 h-5" />} className="text-white hover:bg-black hover:bg-opacity-50">
                            Categorias
                        </Sidebar.Item>
                        <Sidebar.Item href="/subcategories" icon={() => <MdFilterList className="text-white w-6 h-5" />} className="text-white hover:bg-black hover:bg-opacity-50">
                            Subcategorias
                        </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={() => <CgLogOut className="text-white w-6 h-5" />} className="text-white hover:bg-black hover:bg-opacity-50">
                            Sign Out
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={() => <IoMdHelpCircle className="text-white w-6 h-5" />} className="text-white hover:bg-black hover:bg-opacity-50">
                            Help
                        </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
     );
}
 
export default SidebarComponent;