import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";

const Card = ({ title, amount, to = "/" }) => {
  return (
    <div className="p-4 pb-2 shadow-md rounded-md shadow-indigo-100 bg-white border border-indigo-100">
      <h1 className="text-3xl mb-2 font-medium">{amount}</h1>
      <p className="opacity-50 font-semibold">{title}</p>
      <div className="flex justify-end">
        <Link to={to}>
          <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
