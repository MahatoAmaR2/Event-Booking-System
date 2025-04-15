import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../pages/Input";

const BookEvent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Booking submitted:", data);
    setShowPopup(true);
    reset();
  };

  return (
    <div className="w-full flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow rounded p-6 w-full max-w-md"
      >
        <Input
          label="Name"
          placeholder="Enter your name"
          name="name"
          register={register}
          validation={{ required: "Name is required" }}
          error={errors.name}
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          name="email"
          type="email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Enter a valid email",
            },
          }}
          error={errors.email}
        />
        <Input
          label="Contact"
          placeholder="Phone number"
          name="phoneNumber"
          register={register}
          validation={{
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Must be at least 10 digits",
            },
          }}
          error={errors.phoneNumber}
        />
        <Input
          label="Event Type"
          placeholder="e.g. Birthday, Corporate"
          name="eventType"
          register={register}
          validation={{ required: "Event type is required" }}
          error={errors.eventType}
        />
        <Input
          label="Number of Attendees"
          placeholder="Enter number"
          name="attendees"
          type="number"
          register={register}
          validation={{
            required: "Number of attendees is required",
            min: {
              value: 1,
              message: "At least 1 attendee required",
            },
          }}
          error={errors.attendees}
        />

        <button
          type="submit"
          className="text-lg bg-amber-400 w-full py-2 rounded text-white mt-4 font-medium cursor-pointer hover:bg-amber-500 transition-colors duration-300"
        >
          Book Event
        </button>
      </form>
      {showPopup && (
        <div className="fixed inset-0 bg-gradient-to-t from-black/60 to-black/60  flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md text-center w-80">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Booking Confirmed!
            </h3>
            <p className="text-gray-700 mb-4">
              Thank you for booking your event with us.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 px-4 py-2 bg-amber-400 text-white rounded cursor-pointer hover:bg-amber-500 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookEvent;
