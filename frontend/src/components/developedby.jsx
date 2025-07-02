import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const developedby = () => {
  return (
    <div className="min-h-screen  bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md  w-full bg-white shadow-2xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Developed By</h1>
        <div className="rounded-full overflow-hidden w-28 h-28 mx-auto mb-4 border-4 border-indigo-500">
          <img
            src="https://avatars.githubusercontent.com/u/9919?v=4"
            alt="Yahya Profile"
            className="w-full h-full object-contain object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-700">Yahya Dumba</h2>
        <p className="text-gray-500 mt-2">
          Passionate full-stack developer with a focus on AI integration and
          user-centric design. Creator of the AI Code Reviewer.
        </p>
        <div className="flex justify-center gap-6 mt-6 text-gray-600 text-2xl">
          <a
            href="https://github.com/YahyaDumba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yahyadumba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yahyadumba63@gmail.com"
            className="hover:text-red-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Yahya. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default developedby;
