import React, { useState } from "react";

const DropDown = ({ title, options, func }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown relative min-w-[10%]">
      <button
        onClick={handleToggle}
        className="dropdown-btn bg-[#6556cd] text-white text-lg w-full flex justify-center items-center py-2 px-4 rounded-lg cursor-pointer focus:outline-none"
      >
        <span className="capitalize">{title}</span>
        <span
          className={`arrow transition-transform duration-900 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <i className="ri-arrow-down-s-line"></i>
        </span>
      </button>
      <ul
        className={`dropdown-content z-[100] absolute w-full mt-2 list-none p-0 transition-all duration-500 ease-in-out ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={`bg-[#7765e9] text-white rounded-lg mb-1 transition-transform delay-[${index * 60}ms] ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => {
                func(option);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-[#1d1f24] rounded-lg"
            >
              {option.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
