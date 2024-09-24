import { useState } from "react";
import NavbarComponent from "../../components/admin/NavbarComponent";
import SidebarComponent from "../../components/admin/SidebarComponent";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    return (
      <div className="AdminLayout flex h-screen bg-gray-100">
        <SidebarComponent isOpen={sidebarOpen} />
        <div className={`flex flex-col w-full transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
          <NavbarComponent toggleSidebar={toggleSidebar} />
          <div className="flex-grow p-4 bg-gray overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default AdminLayout;
