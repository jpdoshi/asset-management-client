import React from "react";

const Page = ({ children }) => {
  return (
    <main className="min-h-screen bg-indigo-100 bg-opacity-25 pt-[80px] pb-[48px]">
      <div className="max-w-screen-xl mx-auto p-4">{children}</div>
    </main>
  );
};

export default Page;
