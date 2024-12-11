import React from "react";
import Cross from "./Cross";

const TeamUsersList = () => {
  return (
    <div className="bg-white rounded-md border border-indigo-100">
      <table className="w-full">
        <thead>
          <tr className="border-b border-indigo-100 font-semibold">
            <td className="py-2 px-8">ID</td>
            <td className="py-2 px-8">Team Member</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">30005338</td>
            <td className="py-2 px-8 text-sm">Tyrion Lannister</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button
                onClick={() => {
                  alert("remove team member");
                }}
              >
                <span className="opacity-80 text-sm rounded-md p-0.5 bg-red-700 duration-300 hover:bg-red-600 text-white inline-block">
                  <Cross />
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">35902178</td>
            <td className="py-2 px-8 text-sm">Jon Snow</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button
                onClick={() => {
                  alert("remove team member");
                }}
              >
                <span className="opacity-80 text-sm rounded-md p-0.5 bg-red-700 duration-300 hover:bg-red-600 text-white inline-block">
                  <Cross />
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">63421974</td>
            <td className="py-2 px-8 text-sm">Jaime Lannister</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button
                onClick={() => {
                  alert("remove team member");
                }}
              >
                <span className="opacity-80 text-sm rounded-md p-0.5 bg-red-700 duration-300 hover:bg-red-600 text-white inline-block">
                  <Cross />
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">68952180</td>
            <td className="py-2 px-8 text-sm">Cersei Lannister</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button
                onClick={() => {
                  alert("remove team member");
                }}
              >
                <span className="opacity-80 text-sm rounded-md p-0.5 bg-red-700 duration-300 hover:bg-red-600 text-white inline-block">
                  <Cross />
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">46736186</td>
            <td className="py-2 px-8 text-sm">Viserys Targeryen</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button
                onClick={() => {
                  alert("remove team member");
                }}
              >
                <span className="opacity-80 text-sm rounded-md p-0.5 bg-red-700 duration-300 hover:bg-red-600 text-white inline-block">
                  <Cross />
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeamUsersList;
