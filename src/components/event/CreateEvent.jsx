import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const CreateEvent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(today);

  const now = new Date();
  const defaultTime = now.toTimeString().slice(0, 5);
  const [startTime, setStartTime] = useState(defaultTime);

  return (
    <>
      <div className="bg-[#F5F7F9] min-h-screen">
        <div className="fixed top-0 w-full bg-white shadow px-4 py-4 flex items-center gap-3 text-xl text-[#003736] z-10">
          <Link to="/">
            <FaArrowLeft className="cursor-pointer font-medium" />
          </Link>
          <p className="font-semibold">Create New Event</p>
        </div>
        <form className="flex flex-col gap-8 items-center w-full px-4 md:px-8 pt-24 pb-32">
          <div className="shadow bg-white rounded w-full max-w-3xl p-6">
            <label
              htmlFor="eventName"
              className="mb-2 block text-lg font-normal text-gray-800"
            >
              Event name <sup className="text-red-600">*</sup>
            </label>
            <textarea
              rows="1"
              id="eventName"
              name="eventName"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-amber-400 resize-none text-gray-700"
            />
          </div>

          <div className="shadow bg-white rounded w-full max-w-3xl p-6">
            <label
              htmlFor="venue"
              className="mb-2 block text-lg font-normal text-gray-800"
            >
              Select a venue <sup className="text-red-600">*</sup>
            </label>
            <input
              type="text"
              placeholder="Search for a venue"
              id="venue"
              name="venue"
              className="border text-base border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-amber-400 text-gray-700"
            />
            <span
              onClick={() => setShowPopup(true)}
              className="text-amber-400 mt-3 inline-block hover:underline cursor-pointer"
            >
              Add Manually
            </span>

            {showPopup && (
              <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50 px-4 py-8 overflow-auto">
                <div className="bg-white rounded-lg p-4 w-full max-w-xl relative shadow">
                  <button
                    className="absolute top-2 right-2 text-xl text-gray-500 hover:text-amber-400"
                    onClick={() => setShowPopup(false)}
                  >
                    ×
                  </button>
                  <h2 className="text-xl font-semibold mb-4">Add a Venue</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 text-gray-800">Venue</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1 text-gray-800">
                          Address Line 1
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-gray-800">
                          Address Line 2
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-gray-800">
                          Country
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-gray-800">
                          State
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-gray-800">City</label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-gray-800">
                          Zip/Post Code
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      className="bg-amber-400 text-white px-4 py-2 rounded hover:bg-amber-500 transition"
                      onClick={() => setShowPopup(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="shadow bg-white rounded w-full max-w-3xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg text-gray-800 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg text-gray-800 mb-1">
                  Start Time
                </label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg text-gray-800 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg text-gray-800 mb-1">
                  End Time
                </label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="shadow bg-white rounded w-full max-w-3xl p-6">
            <h1 className="text-gray-800 font-normal text-lg">
              Event visibility
            </h1>
            <p className="text-sm mt-2 text-gray-500">
              We may display your event on our explore events page if it meets
              our publishing guidelines.
            </p>

            <h2 className="mt-5 text-gray-800 font-normal text-lg">
              Choose a category
            </h2>
            <p className="text-sm text-gray-500">
              Pick one or more categories that best represent your event.
            </p>

            <select className="mt-4 w-full h-10 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-amber-400 text-gray-500">
              <option value="">Select an event type</option>
              <option>Wedding</option>
              <option>Birthday Party</option>
              <option>Conference</option>
              <option>Corporate Event</option>
              <option>Other</option>
            </select>
          </div>
        </form>
        <div className="fixed bottom-0 w-full bg-white px-4 py-4 shadow flex justify-between items-center z-10">
          <button className="bg-gray-200 text-gray-800 font-normal px-4 py-2 rounded hover:bg-gray-300 transition">
            Cancel
          </button>
          <button className="bg-amber-400 text-white font-semibold px-4 py-2 rounded hover:bg-amber-500 transition">
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
