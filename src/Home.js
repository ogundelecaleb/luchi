import React, { useState } from "react";
import Sidebar from "./scene/global/Sidebar";
import Topbar from "./scene/global/Topbar";
import { Outlet } from "react-router-dom";
import Bottombar from "./scene/global/Bottombar";

const Home = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const [cart, setCart] = useState([]);
  
  const products = [
    {
      id: "1",
      title: "Pounded Yam",
      price: 5000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
    {
      id: "2",
      title: "Eba",
      price: 5000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
    {
      id: "3",
      title: "Rice",
      price: 4000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
    {
      id: "2",
      title: "Yam",
      price: 5000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
    {
      id: "2",
      title: "Shawarma",
      price: 5000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
  ];

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

        <main className="bg-[#FDFBE4] min-h-screen w-full overflow-x-hidden relative">
          <Topbar setIsSidebar={toggleSidebar} cart={cart} setCart={setCart} />
          <Outlet context={[cart, setCart]} />
        </main>
      </div>
      <Bottombar className="" />
    </div>
  );
};

export default Home;
