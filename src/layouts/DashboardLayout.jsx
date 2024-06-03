import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardSidebar></DashboardSidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;