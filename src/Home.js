import React, { useState } from "react";
import Sidebar from "./scene/global/Sidebar";
import Topbar from "./scene/global/Topbar";
import { Outlet } from "react-router-dom";
import Bottombar from "./scene/global/Bottombar";

const Home = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const handleSideBarClose = () => {
    setIsSidebar(false);
  };
  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <div id="popup-root" className="h-screen relative">
      <div className="app bg-[#ffffff] flex ">
        <Sidebar isSidebarOpen={isSidebar} onClose={handleSideBarClose} />

        <main className="bg-[#FDFBE4] w-full overflow-x-hidden relative">
          <Topbar setIsSidebar={toggleSidebar} />
          <Outlet />
        </main>
      </div>
      <Bottombar className="" />
    </div>
  );
};

export default Home;
