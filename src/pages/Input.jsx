
import React from "react";

const Input = ({ label, type = "text", placeholder, name, register, validation, error }) => {
  return (
    <div className="flex flex-col w-[400px] mb-3">
      <label className="mb-1 text-base font-normal text-gray-800">
        {label} <sup className="text-red-600 pl-0.5">*</sup>
      </label>
      
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...(register && register(name, validation))}
        className={`border text-base border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-text transition-colors duration-300 resize-none text-gray-700 ${
          error ? 'border-red-500 focus:ring-red-300' : ''
        }`}
      />

      {error && (
        <span className="text-sm text-red-500 mt-1">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
