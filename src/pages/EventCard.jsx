import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ image, type, date, price, location }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <img src={image} alt={type} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{type}</h3>

        <p className="text-sm text-gray-600 mt-1">📍 {location}</p>

        <p className="text-sm text-gray-600">📅 {date}</p>

        <p className="text-lg text-blue-600 font-bold mt-2">₹ {price}</p>

        <Link
          to="/event/book"
          className="text-center bg-primary text-white py-2 px-4 rounded hover:bg-amber-500 transition-colors duration-300 mt-4"
        >
          Book Event
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
