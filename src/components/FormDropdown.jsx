import React, { useState } from "react";

const FormDropdown = ({ label, text = "Select", valueRef, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex flex-col relative">
      <label className="mb-2">{label}</label>
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-indigo-600 bg-indigo-200 bg-opacity-20 hover:bg-indigo-600 focus:border-transparent hover:text-white border-2 border-indigo-100 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg px-4 py-2 text-center inline-flex items-center"
        type="button"
      >
        {selectedOption || text}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdown"
        className={`${
          showMenu ? "" : "hidden"
        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-[90px]`}
      >
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownDefaultButton"
        >
          {options &&
            options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setSelectedOption(option);
                    valueRef(option);
                    setShowMenu(false);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {option}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FormDropdown;
