import React from "react";
import restaurant from "../assets/restaurant.jpeg";
import { Link } from "react-router-dom";

const Host = () => {
  return (
    <>
      <div className="w-full bg-yellow-50 py-12 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="md:w-1/2 w-full relative flex justify-center">
          <img
            src={restaurant}
            alt="restaurant"
            className="w-full max-w-md h-64 sm:h-72 md:h-80 object-cover rounded"
          />
          <div className="hidden lg:block  absolute border border-amber-500 w-full max-w-md h-80 top-8 left-24 rounded"></div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
            Become a <span className="text-yellow-500">Host</span>
          </h1>
          <h3 className="text-xl sm:text-2xl my-2 font-normal">
            List Your Space and Start Earning
          </h3>
          <p className="text-gray-800 text-sm sm:text-base text-justify leading-6">
            Unlock the potential of your space by joining our community of hosts
            at your Event Venue. List your venue effortlessly, connect with
            eager event planners, and start earning from your property in no
            time. Become a host today and transform your space into a
            sought-after destination for unforgettable events.
          </p>
          <Link
            to="/event/create"
            className="px-6 py-2 mt-4 w-fit mx-auto md:mx-0 bg-primary text-lg text-white rounded-md hover:bg-yellow-400 transition-colors duration-300 font-medium"
          >
            Create Event
          </Link>
        </div>
      </div>
    </>
  );
};

export default Host;
