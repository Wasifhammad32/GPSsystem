import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import user from "../images/user.png";
import screen from "../images/monitor.png";
import close from "../images/pngtree-icon-close-button-png-image_1357822.jpg";
import window from "../images/windows.png";
import file from "../images/files.png";
import report from "../images/statistic.png";
import exit from "../images/power.png";
import menu from "../assets/menu.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Check if the current location is the login page
  const isLoginPage = location.pathname === "/";

  // Render the navbar only if it's not the login page
  if (isLoginPage) {
    return null;
  }
  return (
    <>
      <div className="w-[100%] lg:h-[70px]  bg-blue-950 text-white flex sticky">
        <div
          className="md:w-[45%] sm:w-[70%] lg:pt-3 lg:pb-3 md:pt-3 md:pb-3 sm:pt-2 sm:pb-2 sm:ml-1"
          id="left"
        >
          <div className="flex">
            <div className="w-[15%] ">
              <img
                className="lg:w-11 w-16 ml-5 mt-4  md:mt-0 sm:mt-0  sm:ml-5 lg:h-11 lg:ml-4 md:ml-2 md:w-10 md:h-10 sm:w-9 sm:h-9"
                src={user}
                alt="logo"
              />
            </div>
            <div className="sm:w-[85%] w-[60%] sm:ml-0 ml-10">
              <h1 className="sm:font-bold font-semibold text-[0.9rem] mt-5 lg:text-md md:text-[0.86rem]  md:mt-0 sm:mt-1 sm:text-[0.70rem]">
                GPS TRACKING AND TELEMATICS PLATFORM
              </h1>
              <h6 className="text-sm sm:mb-0 mb-2 sm:text-[0.7rem] md:text-[0.62 rem]">
                Welcome{" "}
                <span className="text-yellow-500">Bin Ali Supplies</span>
              </h6>
            </div>
          </div>
        </div>

        <div
          className="w-[55%]   justify-between lg:pl-4 lg:pr-4 hidden sm:hidden smd:inline-flex md:inline-flex lg:inline-flex"
          id="right"
        >
          <div className="p-2">
            <div>
              <img
                className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                src={screen}
                alt="screen"
              />
            </div>
            <p className="lg:text-xs text-center md:text-[0.70rem]">
              Tracking Maps
            </p>
          </div>
          <div className="p-2">
            <div className="">
              <img
                className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                src={window}
                alt="screen"
              />
            </div>
            <p className="lg:text-xs text-cente md:text-[0.70rem]">
              Multiple <br /> Tracking
            </p>
          </div>

          <div className="p-2">
            <Link to="/info">
              <div>
                <img
                  className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                  src={file}
                  alt="screen"
                />
              </div>
              <p className="lg:text-xs text-center md:text-[0.70rem]">
                Information <br /> Management
              </p>
            </Link>

          <div className="p-2 clear-left  smd:hidden md:block">
            <div >
              <img
                className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                src={file}
                alt="screen"
              />
            </div>
            <p className="lg:text-xs text-center md:text-[0.70rem]">
              Information <br /> Management
            </p>

          </div>
          <div className="p-2">
            <div>
              <img
                className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                src={report}
                alt="screen"
              />
            </div>
            <p className="lg:text-xs text-center md:text-[0.70rem]">
              Reports and <br /> Charts
            </p>
          </div>
          <div className="p-2">
            <div>
              <img
                className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                src={user}
                alt="screen"
              />
            </div>
            <p className="lg:text-xs text-center md:text-[0.70rem]">
              User Profile
            </p>
          </div>
          <div className="p-2">
            <div>
              <img
                className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                src={exit}
                alt="screen"
              />
            </div>
            <p className="lg:text-xs text-center md:text-[0.70rem]">Exit</p>
          </div>
        </div>
       

        <div className=" w-[25%] s flex justify-end items-end pr-4 lg:hidden md:hidden">
          {/* Toggle the visibility of the additional div on menu image click */}
          <img
            className="w-6 h-6 ml-6 mt-4 mb-5 sm:mb-4 flex justify-end cursor-pointer"
            src={menu}
            alt="menu"
            onClick={() => setMenuOpen(!isMenuOpen)}
          />

          {/* Additional div that opens/closes based on isMenuOpen state */}
          {isMenuOpen && (
            <div className="sticky   left-5 responsive-screen sm:top-20 top-24 w-[100%] z-[1]   bg-blue-950 p-4 ">
              <div className="md:w-[25%] w-[100%]   " id="right">
                    <div className="p-2 justify-end flex">
                     
                     
                    <img className="w-5 h-5" onClick={() => setMenuOpen(!isMenuOpen)} src={close}/>
                    </div>
                <div className="p-2  flex">
                  <div className="flex ">
                    {/* <img
                      className="lg:w-6  lg:h-6 m-auto md:w-5 md:h-5"
                      src={screen}
                      alt="screen"
                    /> */}
                  </div>
                  <p className="lg:text-xs ju  pl-10 text-center md:text-[0.70rem]">
                    Tracking 
                  </p>
                 
                </div>
                {/* <div className="p-2 flex">
                  <div> */}
                    {/* <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={window}
                      alt="screen"
                    /> */}
                  {/* </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    Multiple Tracking
                  </p>
                </div> */}
                <div className="p-2 flex">
                  <div>
                    {/* <img
                      className="lg:w-6 lg:h-6 w- m-auto md:w-5 md:h-5"
                      src={file}
                      alt="screen"
                    /> */}
                  </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    Information 
                  </p>
                </div>
                <div className="p-2 flex">
                  <div>
                    {/* <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={report}
                      alt="screen"
                    /> */}
                  </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    Reports 
                  </p>
                </div>
                <div className="p-2 flex ">
                  <div>
                    {/* <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={user}
                      alt="screen"
                    /> */}
                  </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    User 
                  </p>
                </div>
                <div className="p-2 flex">
                  <div>
                    {/* <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={exit}
                      alt="screen"
                    /> */}
                  </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    Exit
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
