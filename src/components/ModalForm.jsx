import React from "react";

const ModalForm = ({ showModal, setShowModal, title, children, onClick }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`${
        showModal ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden backdrop-blur fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-md shadow-indigo-100 border border-indigo-100">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 px-6 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 px-6 space-y-4">{children}</div>
          {/* Modal footer */}
          <div className="flex items-center p-4 px-6 rounded-b">
            <button
              onClick={onClick}
              type="button"
              className="text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
