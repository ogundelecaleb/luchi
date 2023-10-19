import React, { useState } from "react";
import Sidebar from "./scene/global/Sidebar";
import Topbar from "./scene/global/Topbar";
import { Outlet } from "react-router-dom";

const Home = () => {
    const [isSidebar, setIsSidebar] = useState(true);
    const handleSideBarClose = () => {
        setIsSidebar(false);
      };
      const toggleSidebar = () => {
        setIsSidebar(!isSidebar);
      };
  return (
    <div id="popup-root" className="app bg-[#ffffff] flex ">
      <Sidebar isSidebarOpen={isSidebar} onClose={handleSideBarClose} />        
      <main className="bg-[#FDFBE4] w-full overflow-x-hidden">
      <Topbar setIsSidebar={toggleSidebar} />
      <Outlet  />
</main>
    </div>
  );
};

export default Home;
