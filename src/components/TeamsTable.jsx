import React from "react";
import { Link } from "react-router-dom";

import Arrow from "./Arrow";

const TeamsTable = () => {
  return (
    <div className="bg-white rounded-md border border-indigo-100">
      <table className="w-full">
        <thead>
          <tr className="border-b border-indigo-100 font-semibold">
            <td className="py-2 px-8">ID</td>
            <td className="py-2 px-8">Team</td>
            <td className="py-2 px-8">Manager</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">30005338</td>
            <td className="py-2 px-8 text-sm">Accounts Deaprtment</td>
            <td className="py-2 px-8 text-sm">Jon Snow</td>
            <td className="py-2 px-8 text-sm">
              <Link to={"/teams/accounts-department"}>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  <Arrow />
                </span>
              </Link>
            </td>
          </tr>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">35902178</td>
            <td className="py-2 px-8 text-sm">Management Team</td>
            <td className="py-2 px-8 text-sm">Bran Stark</td>
            <td className="py-2 px-8 text-sm">
              <Link to={"/teams/management-team"}>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  <Arrow />
                </span>
              </Link>
            </td>
          </tr>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">63421974</td>
            <td className="py-2 px-8 text-sm">Digital Marketing</td>
            <td className="py-2 px-8 text-sm">Jaime Lannister</td>
            <td className="py-2 px-8 text-sm">
              <Link to={"/teams/digital-marketing"}>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  <Arrow />
                </span>
              </Link>
            </td>
          </tr>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">68952180</td>
            <td className="py-2 px-8 text-sm">Software Development</td>
            <td className="py-2 px-8 text-sm">Arya Stark</td>
            <td className="py-2 px-8 text-sm">
              <Link to={"/teams/software-development"}>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  <Arrow />
                </span>
              </Link>
            </td>
          </tr>
          <tr className="border-b border-indigo-100">
            <td className="py-2 px-8 text-sm">46736186</td>
            <td className="py-2 px-8 text-sm">Graphics Designing</td>
            <td className="py-2 px-8 text-sm">Jaime Lannister</td>
            <td className="py-2 px-8 text-sm">
              <Link to={"/teams/graphics-designing"}>
                <span className="opacity-80 text-sm rounded px-2.5 py-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
                  <Arrow />
                </span>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeamsTable;
