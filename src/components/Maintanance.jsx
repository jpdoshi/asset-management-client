import React, { useEffect, useState } from "react";

import axios from "axios";
import { API_URL } from "../config.mjs";

const Maintanance = () => {
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recentsRes = await axios.get(`${API_URL}/asset/recents`);
        setRecents(recentsRes.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-md border border-indigo-100 shadow-lg shadow-indigo-50">
      <table className="w-full">
        <thead>
          <tr className="border-b border-indigo-100 font-semibold">
            <td className="py-2 px-8">ID</td>
            <td className="py-2 px-8">Asset</td>
            <td className="py-2 px-8">Type</td>
            <td className="py-2 px-8">User</td>
            <td className="py-2 px-8">Status</td>
          </tr>
        </thead>
        <tbody>
          {recents &&
            recents.map((recent, index) => (
              <tr key={index} className="border-b border-indigo-100">
                <td className="py-2 px-8 text-sm">{recent._id}</td>
                <td className="py-2 px-8 text-sm">{recent.product}</td>
                <td className="py-2 px-8 text-sm">{recent.category}</td>
                <td className="py-2 px-8 text-sm">
                  {recent.user ? recent.user.name : "Unassigned"}
                </td>
                <td className="py-2 px-8 text-sm">{recent.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Maintanance;
