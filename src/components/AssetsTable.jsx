import React from "react";

const AssetsTable = () => {
  return (
    <div className="bg-white shadow-indigo-100 shadow rounded-md border border-indigo-100">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 font-semibold">
            <td className="py-2 px-8">ID</td>
            <td className="py-2 px-8">Product</td>
            <td className="py-2 px-8">User</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">30005338</td>
            <td className="py-2 px-8 text-sm">Product #0</td>
            <td className="py-2 px-8 text-sm">Tyrion Lannister</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  scrap
                </span>
              </button>
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  remove
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">35902178</td>
            <td className="py-2 px-8 text-sm">Product #1</td>
            <td className="py-2 px-8 text-sm">Jon Snow</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  scrap
                </span>
              </button>
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  remove
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">63421974</td>
            <td className="py-2 px-8 text-sm">Product #2</td>
            <td className="py-2 px-8 text-sm">Jaime Lannister</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  scrap
                </span>
              </button>
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  remove
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">68952180</td>
            <td className="py-2 px-8 text-sm">Product #3</td>
            <td className="py-2 px-8 text-sm">Cersei Lannister</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  scrap
                </span>
              </button>
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  remove
                </span>
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-8 text-sm">46736186</td>
            <td className="py-2 px-8 text-sm">Product #4</td>
            <td className="py-2 px-8 text-sm">Viserys Targeryen</td>
            <td className="py-2 px-8 text-sm flex gap-2">
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  scrap
                </span>
              </button>
              <button>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  remove
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
