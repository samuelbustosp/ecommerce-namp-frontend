import { Outlet } from "react-router-dom";
import NavbarClient from "../../components/client/NavbarClient"

const ClientLayout = () => {
    return ( 
        <div className="ClientLayout h-screen bg-gray-100">
            <NavbarClient/>
            <div className="flex-grow p-4 bg-page overflow-auto">
                <Outlet />
            </div>
        </div>
    );

    
}
 
export default ClientLayout;