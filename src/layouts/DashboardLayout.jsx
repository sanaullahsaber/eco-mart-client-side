import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
       <DashboardSidebar></DashboardSidebar>
      <div className="flex-1  md:ml-72">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;