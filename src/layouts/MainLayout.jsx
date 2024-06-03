import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import BottomBar from "../components/BottomBar(Footer)/BottomBar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <BottomBar></BottomBar>
    </div>
  );
};

export default MainLayout;