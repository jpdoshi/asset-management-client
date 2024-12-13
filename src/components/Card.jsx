import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";

const Card = ({ title, amount, to = "/" }) => {
  return (
    <div className="p-4 pb-2 rounded-md bg-white border border-indigo-100">
      <h1 className="text-3xl mb-2 font-medium">{amount || 0}</h1>
      <p className="opacity-50 font-semibold">{title}</p>
      <div className="flex justify-end">
        <Link to={to}>
          <span className="text-sm rounded px-2.5 py-1.5 bg-indigo-600 duration-300 hover:bg-indigo-500 text-white inline-block">
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
