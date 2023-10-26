import React from "react";
import { Link } from "react-router-dom";
import { Routing, Gallery, Colorfilter } from "iconsax-react";
import { useLocation } from "react-router-dom";


const Bottombar = () => {
    const router = useLocation();

  return (
    <div className="fixed bottom-0 w-full md:hidden ">
      {/* <div className="relative h-full w-full"> */}
        {" "}
        <div className="py-[10px] px-[20px]  w-full bg-[#FDFBE4] ">
          <ul className="flex justify-between ">
            <li>
              {" "}
              <Link
                to="/menu"
                className={` flex tracking-[0.2px] font-medium text-[14px] leading-[21px] flex-col items-center  ${
                  window.location.pathname === "/menu"
                    ? "text-[#CA5834] rounded-[40px]"
                    : "text-black"
                }`}
              >
                <svg
                  className="mr-[12px]"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8248 19.4584H5.17484C2.8915 19.4584 1.0415 17.6001 1.0415 15.3167V9.14173C1.0415 8.00839 1.7415 6.58339 2.6415 5.88339L7.13317 2.38339C8.48317 1.33339 10.6415 1.28339 12.0415 2.26673L17.1915 5.87506C18.1832 6.56673 18.9582 8.05006 18.9582 9.25839V15.3251C18.9582 17.6001 17.1082 19.4584 14.8248 19.4584ZM7.89984 3.36673L3.40817 6.86673C2.8165 7.33339 2.2915 8.39173 2.2915 9.14173V15.3167C2.2915 16.9084 3.58317 18.2084 5.17484 18.2084H14.8248C16.4165 18.2084 17.7082 16.9167 17.7082 15.3251V9.25839C17.7082 8.45839 17.1332 7.35006 16.4748 6.90006L11.3248 3.29173C10.3748 2.62506 8.80817 2.65839 7.89984 3.36673Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10 16.125C9.65833 16.125 9.375 15.8417 9.375 15.5V13C9.375 12.6583 9.65833 12.375 10 12.375C10.3417 12.375 10.625 12.6583 10.625 13V15.5C10.625 15.8417 10.3417 16.125 10 16.125Z"
                    fill="currentColor"
                  />
                </svg>
                Menu
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/track"
                className={` flex items-center tracking-[0.2px] font-medium text-[14px] leading-[21px] flex-col   ${
                  router.pathname === "/track"
                    ? "text-[#CA5834] rounded-[40px]"
                    : "text-black"
                }`}
              >
                <Routing
                  color={
                    window.location.pathname === "/track" ? "#CA5834" : "#000"
                  }
                  variant="Linear"
                  size={24}
                  className=""
                />
                Track
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={` flex items-center tracking-[0.2px] font-medium text-[14px] leading-[21px] flex-col   ${
                  window.location.pathname === "/gallery"
                    ? "text-[#CA5834] rounded-[40px]"
                    : "text-black"
                }`}
              >
                <Gallery
                  color={
                    window.location.pathname === "/gallery" ? "#CA5834" : "#000"
                  }
                  variant="Linear"
                  size={24}
                  className="mr-[12px]"
                />
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className={` flex items-center tracking-[0.2px] font-medium text-[14px] leading-[21px] flex-col   ${
                  window.location.pathname === "/company"
                    ? "text-[#CA5834] rounded-[40px]"
                    : "text-black"
                }`}
              >
                <Colorfilter
                  color={
                    window.location.pathname === "/company" ? "#CA5834" : "#000"
                  }
                  variant="Linear"
                  size={24}
                  className="mr-[12px]"
                />
                Company
              </Link>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Bottombar;
