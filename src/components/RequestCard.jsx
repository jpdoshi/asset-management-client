import React from "react";
import Tick from "./Tick";
import Cross from "./Cross";

const RequestCard = ({ user, team, asset }) => {
  return (
    <div className="px-6 py-4 flex justify-between rounded-md bg-white border border-indigo-100">
      <div className="my-auto">
        <h1 className="text-2xl font-medium mb-1">{asset}</h1>
        <ul className="flex gap-3">
          <li>
            <span className="opacity-50 font-medium">{user}</span>
          </li>
          <li>
            <span className="opacity-50 font-medium">{team}</span>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <button onClick={() => alert("accept request")}>
          <span className="text-sm rounded-md p-0.5 bg-green-700 duration-300 hover:bg-green-600 text-white inline-block">
            <Tick />
          </span>
        </button>
        <button onClick={() => alert("decline request")}>
          <span className="text-sm rounded-md p-0.5 bg-red-600 duration-300 hover:bg-red-500 text-white inline-block">
            <Cross />
          </span>
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
