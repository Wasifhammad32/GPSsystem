import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import user from "../images/user.png";
import screen from "../images/monitor.png";
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
                className="lg:w-11  sm:ml-10 lg:h-11 lg:ml-4 md:ml-2 md:w-10 md:h-10 sm:w-9 sm:h-9"
                src={user}
                alt="logo"
              />
            </div>
            <div className="w-[85%]">
              <h1 className="font-bold lg:text-md md:text-[0.86rem] sm:text-[0.70rem]">
                GPS TRACKING AND TELEMATICS PLATFORM
              </h1>
              <h6 className="text-sm md:text-[0.62 rem]">
                Welcome{" "}
                <span className="text-yellow-500">Bin Ali Supplies</span>
              </h6>
            </div>
          </div>
        </div>

        <div
          className="w-[55%]  flex justify-between lg:pl-4 lg:pr-4 sm:hidden md:inline-flex lg:inline-flex"
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
        <div className="sm:block md:hidden w-[5%] flex justify-end items-end pr-4">
          <img className="w-6 h-6  ml-14 mt-4" src={menu} alt="logo" />
        </div>

        <div className=" w-[5%] flex justify-end items-end pr-4 lg:hidden md:hidden">
          {/* Toggle the visibility of the additional div on menu image click */}
          <img
            className="w-6 h-6 ml-14 mt-4 cursor-pointer"
            src={menu}
            alt="menu"
            onClick={() => setMenuOpen(!isMenuOpen)}
          />

          {/* Additional div that opens/closes based on isMenuOpen state */}
          {isMenuOpen && (
            <div className="absolute top-20 w-[96%] left-5 right-5 bg-blue-950 p-4 z-[999]">
              <div className="w-[25%]   " id="right">
                <div className="p-2 flex">
                  <div>
                    <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={screen}
                      alt="screen"
                    />
                  </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    Tracking Maps
                  </p>
                </div>

                <div className="p-2 flex">
                  <div>
                    <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={window}
                      alt="screen"
                    />
                  </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    Multiple Tracking
                  </p>
                </div>
                <div className="p-2 flex">
                  <div>
                    <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={file}
                      alt="screen"
                    />
                  </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    Information Management
                  </p>
                </div>
                <div className="p-2 flex">
                  <div>
                    <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={report}
                      alt="screen"
                    />
                  </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    Reports and Charts
                  </p>
                </div>
                <div className="p-2 flex">
                  <div>
                    <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={user}
                      alt="screen"
                    />
                  </div>
                  <p className="lg:text-xs pl-10 text-center md:text-[0.70rem]">
                    User Profile
                  </p>
                </div>
                <div className="p-2 flex">
                  <div>
                    <img
                      className="lg:w-6 lg:h-6 m-auto md:w-5 md:h-5"
                      src={exit}
                      alt="screen"
                    />
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
