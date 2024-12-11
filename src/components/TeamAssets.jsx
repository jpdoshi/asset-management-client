import React from "react";
import Cross from "./Cross";

const TeamAssets = () => {
  return (
    <div className="bg-white rounded-md border border-indigo-100">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 font-semibold">
            <td className="py-2 px-8">ID</td>
            <td className="py-2 px-8">Asset Name</td>
            <td className="py-2 px-8">Asset Type</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">30005338</td>
            <td className="py-2 px-8 text-sm">Logitech M022</td>
            <td className="py-2 px-8 text-sm">Mouse</td>
            <td className="py-2 px-8 text-sm">
              <button
                onClick={() => {
                  alert("remove item");
                }}
              >
                <span className="opacity-80 text-sm rounded-md p-0.5 bg-red-700 duration-300 hover:bg-red-600 text-white inline-block">
                  <Cross />
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">35902178</td>
            <td className="py-2 px-8 text-sm">MSI Katana 15</td>
            <td className="py-2 px-8 text-sm">Laptop</td>
            <td className="py-2 px-8 text-sm">
              <button
                onClick={() => {
                  alert("remove item");
                }}
              >
                <span className="opacity-80 text-sm rounded-md p-0.5 bg-red-700 duration-300 hover:bg-red-600 text-white inline-block">
                  <Cross />
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">35902178</td>
            <td className="py-2 px-8 text-sm">Asus TUF F15</td>
            <td className="py-2 px-8 text-sm">Laptop</td>
            <td className="py-2 px-8 text-sm">
              <button
                onClick={() => {
                  alert("remove item");
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

export default TeamAssets;
