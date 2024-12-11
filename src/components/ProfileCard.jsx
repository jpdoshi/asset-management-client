import React from "react";

const ProfileCard = ({ label, value }) => {
  return (
    <div className="p-4 pb-2 rounded-md bg-white border border-indigo-100">
      <h1 className="text-2xl mb-1 font-medium">{value}</h1>
      <p className="opacity-50 font-semibold">{label}</p>
    </div>
  );
};

export default ProfileCard;
