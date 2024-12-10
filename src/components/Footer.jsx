import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-indigo-100 py-5 text-center">
      <p className="font-medium text-lg">
        Made with <span className="font-bold text-red-500">♥</span> by{" "}
        <a
          href="https://github.com/jpdoshi"
          className="underline underline-offset-2"
        >
          jpdoshi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
