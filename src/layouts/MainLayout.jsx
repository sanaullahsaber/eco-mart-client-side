import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import BottomBar from "../components/BottomBar(Footer)/BottomBar";

const MainLayout = () => {
  return (
    <div style={{ background: "rgb(245, 247, 246)" }}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <BottomBar></BottomBar>
    </div>
  );
};

export default MainLayout;