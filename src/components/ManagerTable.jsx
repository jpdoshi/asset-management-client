import React from "react";
import Cross from "./Cross";

const ManagerTable = () => {
  return (
    <div className="mt-4 bg-white rounded-md border border-indigo-100">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 font-semibold">
            <td className="py-2 px-8">ID</td>
            <td className="py-2 px-8">Team Manager</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">30005338</td>
            <td className="py-2 px-8 text-sm">Sansa Stark</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button
                onClick={() => {
                  alert("remove manager");
                }}
              >
                <span className="opacity-80 text-sm rounded-md p-0.5 bg-red-700 duration-300 hover:bg-red-600 text-white inline-block">
                  <Cross />
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">98575346</td>
            <td className="py-2 px-8 text-sm">Robert Baratheon</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button
                onClick={() => {
                  alert("remove manager");
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

export default ManagerTable;
