import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="h-[10vh] sticky top-0 z-50 w-full bg-black px-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-white">
        <img src={logo} alt="logo" className="w-28 md:w-32" />
      </Link>

      <div className="hidden md:flex items-center gap-4 text-white text-base font-normal">
        <Link
          to="/"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/event/book"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Book Event
        </Link>
        <Link
          to="/event/events"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Events
        </Link>
        <Link
          to="/host"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Host
        </Link>
        <Link
          to="/event/create"
          className="flex items-center gap-2 bg-primary rounded py-2 px-3 hover:bg-yellow-400 transition duration-300"
        >
          <SlCalender />
          Create Event
        </Link>
      </div>

      <div className="hidden md:block bg-primary hover:bg-yellow-400 transition duration-300 text-base font-medium px-4 py-2 text-white rounded">
        <Link to="/">Login</Link>
      </div>

      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
      </div>

      {isOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white text-black flex flex-col gap-4 py-6 px-4 md:hidden shadow-md z-50">
          <Link to="/" className="hover:text-yellow-400" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/event/book"
            className="hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Book Event
          </Link>
          <Link
            to="/event/events"
            className="hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link
            to="/host"
            className="hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Host
          </Link>
          <Link
            to="/event/create"
            className="flex items-center gap-2 bg-primary rounded py-2 px-3 hover:bg-yellow-400 transition duration-300 w-fit text-white"
            onClick={toggleMenu}
          >
            <SlCalender />
            Create Event
          </Link>
          <Link
            to="/"
            className="bg-primary hover:bg-yellow-400 transition duration-300 text-white font-medium px-4 py-2 rounded w-fit"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
