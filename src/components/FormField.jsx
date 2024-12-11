import React from "react";

const FormField = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full p-2 rounded-lg border-2 border-indigo-100 bg-indigo-100 bg-opacity-25 focus:border-indigo-400 outline-none"
        type="text"
      />
    </div>
  );
};

export default FormField;
