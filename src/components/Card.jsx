import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";

const Card = ({ title, amount, to = "/" }) => {
  return (
    <div className="p-4 pb-2 rounded-md bg-white border border-indigo-100 shadow-lg shadow-indigo-50">
      <h1 className="text-3xl mb-2 font-medium">{amount || 0}</h1>
      <p className="opacity-50 font-semibold">{title}</p>
      <div className="flex justify-end">
        <Link to={to}>
          <span className="text-sm rounded-md px-2.5 py-1.5 bg-gradient-to-br from-indigo-400 to-indigo-600 text-white inline-block shadow-md shadow-gray-200">
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
