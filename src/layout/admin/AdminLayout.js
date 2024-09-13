import { useState } from "react";
import NavbarComponent from "../../components/admin/NavbarComponent";
import SidebarComponent from "../../components/admin/SidebarComponent";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
      <div className="AdminLayout flex h-screen bg-gray-100">
        {/* Sidebar */}
        <SidebarComponent isOpen={sidebarOpen} />
        
        {/* Main Content Area */}
        <div className={`flex flex-col w-full transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
          <NavbarComponent toggleSidebar={toggleSidebar} />
          
          {/* Outlet where other pages are rendered */}
          <div className="flex-grow p-4 bg-page overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default AdminLayout;
