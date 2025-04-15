import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventCard from "../../pages/EventCard";
import birthdayImg from "../../assets/birthday.jpeg";
import corporate from "../../assets/corporate.jpeg";
import wedding from "../../assets/wedding.jpeg";
import seminar from "../../assets/seminar.jpeg";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const allEvents = [
    {
      id: 1,
      image: birthdayImg,
      type: "Birthday Party",
      date: "2025-04-20",
      price: 3000,
      location: "New Delhi",
    },
    {
      id: 2,
      image: corporate,
      type: "Corporate Conference",
      date: "2025-04-20",
      price: 5000,
      location: "Bangalore",
    },
    {
      id: 3,
      image: wedding,
      type: "Wedding Reception",
      date: "2025-05-01",
      price: 10000,
      location: "Mumbai",
    },
    {
      id: 4,
      image: seminar,
      type: "Seminar",
      date: "2025-05-10",
      price: 2000,
      location: "Hyderabad",
    },
  ];
  const filteredEvents = selectedDate
    ? allEvents.filter(
        (event) =>
          new Date(event.date).toDateString() === selectedDate.toDateString()
      )
    : allEvents;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Upcoming Events
      </h2>

      <div className="flex justify-center mb-8">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a date"
          className="p-2 border rounded shadow"
        />
        <button
          onClick={() => setSelectedDate(null)}
          className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Filter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              type={event.type}
              date={event.date}
              price={event.price}
              location={event.location}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No events found for the selected date.
          </p>
        )}
      </div>
    </div>
  );
};

export default Events;
