import React, { useState } from "react";

const VehicleTrackingList = () => {
  const [selectedOption, setSelectedOption] = useState("default");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="w-[100%] sm:h-[100vh] xxs:h-[130vh] min-h-screen bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          Vehicle Tracking List
        </h2>
      </div>
      <div className="w-full space-y-3 xs:w-full">
        <form className="mt-8 space-y-6" method="POST">
          {/* <input type="hidden" name="remember" defaultValue="true" /> */}

          <div className="rounded-md shadow-sm space-y-6">
            <div className="sm:inline-block xxs:block sm:w-[50%]">
              <label htmlFor="plate-number" className="w-[50%] p-2">
                Plate Number:
              </label>
              <input
                id="plate-number"
                name="platenumber"
                type="text"
                required
                className="appearance-none rounded-md block md:w-[45%] xss:w-[90%] px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sm:inline-block xxs:block sm:w-[50%]">
              <label htmlFor="vehicle-type" className="w-[50%] p-2">
                Vehicle type:
              </label>
              <select
                id="vehicle-type"
                name="vehicletype"
                required
                className="appearance-none rounded-md block md:w-[45%] xss:w-[90%] px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              >
                <option value="">Select a vehicle type</option>
                <option value="car">Car</option>
                <option value="truck">Truck</option>
                <option value="motorcycle">Motorcycle</option>
                {/* Add more options here */}
              </select>
            </div>
            <div className="sm:inline-block xxs:block sm:w-[50%]">
              <label htmlFor="tracker-model" className="w-[50%] p-2">
                Tracker model:
              </label>
              <input
                id="tracker-model"
                name="trackermodel"
                type="text"
                required
                className="appearance-none rounded-md block md:w-[45%] xss:w-[90%] px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sm:inline-block xxs:block sm:w-[50%]">
              <label htmlFor="trackernumber" className="w-[50%] p-2">
                Tracker number:
              </label>
              <input
                id="tracker-number"
                name="trackernumber"
                type="text"
                required
                className="appearance-none rounded-md block md:w-[45%] xss:w-[90%] px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sm:inline-block xxs:block sm:w-[50%]">
              <label htmlFor="mobile-number" className="w-[50%] p-2">
                Mobile Number:
              </label>
              <input
                id="mobile-number"
                name="mobilenumber"
                type="text"
                required
                className="appearance-none rounded-md block md:w-[45%] xss:w-[90%] px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sm:inline-block xxs:block sm:w-[50%]">
              <label htmlFor="icon" className="w-[50%] p-2 pr-10">
                Icon:
              </label>
              <div className="flex items-center space-x-2">
                <select
                  id="icon"
                  name="icon"
                  className="appearance-none rounded-md md:w-[45%] xss:w-[90%] px-2 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={handleOptionChange}
                  value={selectedOption}
                >
                  <option value="default">Default Icon</option>
                  <option value="custom">Custom Icon</option>
                </select>
                {selectedOption === "custom" && (
                  <>
                    <label
                      htmlFor="custom-icon"
                      className="cursor-pointer text-indigo-500"
                    >
                      Upload
                    </label>
                    <input
                      type="file"
                      id="custom-icon"
                      name="custom-icon"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange} // Handle image upload here
                    />
                  </>
                )}
              </div>
              {selectedOption === "custom" && selectedFile && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Custom Icon Preview"
                    className="max-w-[100px] max-h-[100px]"
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-40 px-5 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleTrackingList;
