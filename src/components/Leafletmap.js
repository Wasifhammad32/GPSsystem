import { useState } from "react";
import { Link } from "react-router-dom";
import Leaflet from "../maps/leaflet";
import setting from "../assets/settings.png";
import alarm from "../assets/alarm.png";
import msg from "../assets/send.png";
import search from "../assets/magnifying-glass.png";
import burger from "../assets/menu.png";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import flag from "../assets/finish.png";
import car from "../assets/car.png";
import satelite from "../assets/satelite.png";

const Leafletmap = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopupp = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="Screen relative z-10">
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }

          @keyframes slideOut {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }

          #trackingPopup {
            animation: ${showPopup ? "slideIn" : "slideOut"} 1s ease-in-out;
          }
        `}
      </style>
      <div className="w-[50%] absolute top-20 z-[999]">
        {!showPopup && (
          <div id="trackingButton" onClick={togglePopupp} className="w-[50%] ">
            <img className=" ml-4 w-6 h-6" src={right} alt="rigth" />
          </div>
        )}
      </div>

      <div className="Section bg-white w-[100%] relative flex">
        <div className="\ ">
          {showPopup && (
            <div
              id="trackingPopup"
              className="sideBar  w-[400px] relative z-[100] "
            >
              <div className="pl-10 pt-2 pb-2 text-sm pr-3 w-[100%] flex justify-between">
                <div>
                  <img className="w-6 h-6 m-auto" src={setting} alt="image" />
                  <caption className="flex ">Setting</caption>
                </div>
                <div>
                  <img className="w-6 h-6 m-auto" src={alarm} alt="image" />
                  <caption className="flex ">Alarm</caption>
                </div>
                <div>
                  <img
                    className="w-6 h-6  hover:cur m-auto"
                    src={msg}
                    alt="image"
                  />
                  <caption className="flex ">Message</caption>
                </div>
                <div>
                  <img
                    onClick={togglePopupp}
                    className="w-5  h-5 mt-2 m-auto"
                    src={left}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-[80%] flex items-center text-sm text-gray-500 border-2 pl-10 pr-10 h-9">
                  <p>Please enter IMEI/ID/NAME</p>
                </div>
                <div className="pl-2 pr-2 w-[20%] flex border-y-2 justify-between">
                  <img className="w-5 mt-2 h-5 " src={search} alt="image" />
                  <img className="w-4 mt-2 h-4 " src={burger} alt="image" />
                </div>
              </div>
              <div className="pl-2">
                <div className="flex">
                  <img className="w-4 mt-2 h-4" src={right} alt="image" />
                  <input className="ml-2 mt-1" type="checkbox" />
                  <p className="mt-1 text-[16px] ml-2">
                    My Tracker <span className="text-blue-600">[0/3]</span>
                  </p>
                </div>
                <div className="flex">
                  <img className="w-4 mt-2 h-4" src={right} alt="image" />
                  <input className="ml-2 mt-1" type="checkbox" />
                  <p className="mt-1 text-[16px] ml-2">
                    Safecare Technology{" "}
                    <span className="text-blue-600">[125/165]</span>
                  </p>
                </div>
                <div className="flex">
                  <img className="w-4 mt-2 h-4" src={flag} alt="image" />
                  <input className="ml-2 mt-1" type="checkbox" />
                  <p className="mt-1 text-gray-600 text-[16px] ml-2">
                    Ungrouped List <span>[7/11]</span>
                  </p>
                </div>
              </div>
              <div className="mt-2 ">
                <div className="flex ml-3 bg-blue-400 mt-3 mb-3 border-2 border-gray-400 rounded-md w-[92%] ">
                  <input className="ml-1 mt-1 " type="checkbox" />
                  <div className="ml-2 ">
                    <div className="w-10 mt-1 m-auto h-10 border-2 rounded-full border-gray-700">
                      <img
                        className="w-7  mt-1 h-7 m-auto"
                        src={car}
                        alt="image"
                      />
                    </div>
                    <caption className="text-sm">14.79316</caption>
                    <p>(Khizad)</p>
                  </div>
                  <div className="ml-3 text-sm">
                    <p className="pb-1">2023-10-12 10:42:02</p>
                    <p className="pb-1">Voltage:12.78V Ignition:OFF</p>
                    <p className="pb-1">ID/IMEI:122345666/</p>
                    <p className="pb-1">Today Mileage:18.269</p>
                  </div>
                  <div className="ml-4 ">
                    <p>0km/h</p>
                    <img
                      className="w-7 h-7 m-auto mt-2"
                      src={satelite}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="border-t-2 border-gray-400 px-4">
                  <div className="border-t-2 px-6 pt-4 pb-8 flex justify-between border-green-400">
                    <p className="text-sm">
                      Total:<span className="text-blue-500">168</span>
                    </p>
                    <p className="text-sm">
                      Online:<span className="text-blue-500">125</span>
                    </p>
                    <p className="text-sm">
                      Offline:<span className="text-blue-500">43</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-[100%] overflow-x-hidden ">
          <Leaflet />
        </div>
      </div>
    </div>
  );
};

export default Leafletmap;
