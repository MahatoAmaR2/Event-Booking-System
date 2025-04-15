import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 px-6 md:px-10 lg:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">
              Learn How Our Software Can
            </h1>
            <h1 className="text-base font-semibold">
              Help You Manage Your Next Event
            </h1>
            <div className="text-sm text-gray-800 flex flex-col gap-1 font-normal mt-3">
              <p>Fashion Show</p>
              <p>Birthday Party</p>
              <p>Lunch Event</p>
              <p>Holiday Party</p>
              <p>Dinner Party</p>
              <p>Production</p>
              <p>Work Space</p>
              <p>Pop Ups</p>
              <p>New & Unique</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">Company</h1>
            <div className="text-sm text-gray-800 flex flex-col gap-1 font-normal mt-3">
              <p>About Us</p>
              <p>How It Works</p>
              <p>Help Center</p>
              <p>Host</p>
              <p>Contact Us</p>
              <p>Privacy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">
              What's Happening Near You
            </h1>
            <div className="text-sm text-gray-800 flex flex-col gap-1 font-normal mt-3">
              <p>Events Near You</p>
              <p>Select Location</p>
              <p>Host</p>
            </div>
            <h1 className="text-base font-semibold mt-5">Integration</h1>
            <div className="text-sm text-gray-800 flex flex-col gap-1 font-normal mt-3">
              <p>Payments</p>
              <p>Our Event Software</p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">
              Subscribe for More Updates
            </h1>
            <input
              type="text"
              placeholder="Write your email"
              className="border text-base border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-amber-400 transition-colors duration-300 resize-none text-gray-700 mt-3"
            />
            <button className="px-6 py-2 mt-2 w-fit bg-primary text-lg text-white rounded-md hover:bg-yellow-400 transition-colors duration-300 font-medium">
              Create Event
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="border-t border-gray-300 w-full"></div>
          <p className="text-gray-500 text-xs font-normal mt-4 text-center">
            &copy; Your Event Venue Marketplace 2025. All Rights Reserved. |
            Cookie Preferences | Report Vulnerability
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
