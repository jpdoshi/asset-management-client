import React from "react";

const Login = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("form submitted");
  };
  return (
    <main className="min-h-screen w-screen bg-indigo-300 bg-opacity-10 fixed">
      <form onSubmit={handleFormSubmit}>
        <div className="bg-white p-4 max-w-[90%] w-[600px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-md border border-indigo-100">
          <h1 className="text-3xl font-medium mb-1">Login</h1>
          <h1 className="font-medium text-lg opacity-60">
            Complete login to continue
          </h1>
          <div className="mt-8">
            <div className="mb-6 flex flex-col">
              <label className="mb-2">Enter Username</label>
              <input
                type="text"
                className="w-full border border-indigo-100 bg-indigo-100 bg-opacity-20 p-2 rounded-md"
                placeholder="e.g: admin123"
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2">Enter Password</label>
              <input
                type="text"
                className="w-full border border-indigo-100 bg-indigo-100 bg-opacity-20 p-2 rounded-md"
                placeholder="********"
              />
            </div>
            <button className="mt-4 block w-full bg-indigo-600 text-white rounded-md p-2 font-medium">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
