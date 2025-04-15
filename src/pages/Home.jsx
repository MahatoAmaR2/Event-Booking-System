import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "../components/navbar/Navbar";
import Events from "../components/event/Events";
import "../style/Home.css";
import Host from "./Host";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <>
      <div className="bgImg h-screen w-full bg-cover bg-center">
        <Navbar />

        <div className="flex items-center justify-center flex-col h-[90vh] px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-text mb-4 leading-tight">
            Plan Your Event Effortlessly
          </h1>

          <p className="text-white font-semibold text-base sm:text-lg md:text-xl max-w-2xl mb-6">
            Book and manage your events with our simple and intuitive system.
            Select dates, fill in event details, and you're done!
          </p>

          <Link
            to="/event/create"
            className="px-6 py-3 bg-primary text-lg sm:text-xl text-white rounded-md hover:bg-yellow-400 transition duration-300 font-medium"
          >
            Create Event
          </Link>

          <div className="rating mt-10 sm:mt-12">
            <p className="text-white mb-1 font-semibold text-sm sm:text-base">
              Excellent 4.7/5
            </p>
            <div className="stars text-text flex gap-1 text-base sm:text-lg">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Events />
      </div>
      <div>
        <Host />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
