import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default MainLayout;
