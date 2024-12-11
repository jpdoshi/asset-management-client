import React from "react";

const UserAssets = () => {
  return (
    <div className="bg-white rounded-md border border-indigo-100">
      <table className="w-full">
        <thead>
          <tr className="border-b border-indigo-100 font-semibold">
            <td className="py-2 px-8">ID</td>
            <td className="py-2 px-8">Asset Name</td>
            <td className="py-2 px-8">Asset Type</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">30005338</td>
            <td className="py-2 px-8 text-sm">Lenovo LOQ 2024</td>
            <td className="py-2 px-8 text-sm">Laptop</td>
            <td className="py-2 px-8 text-sm">
              <button onClick={() => alert("request maintanance")}>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  Request Maintanance
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">63421974</td>
            <td className="py-2 px-8 text-sm">Logitech M055</td>
            <td className="py-2 px-8 text-sm">Mouse</td>
            <td className="py-2 px-8 text-sm">
              <button onClick={() => alert("request maintanance")}>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  Request Maintanance
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserAssets;
