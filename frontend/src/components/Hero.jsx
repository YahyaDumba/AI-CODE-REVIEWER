import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,
    });
  });
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/main"); // 👈 Redirects to AnotherPage
  };
  return (
    <div
      data-aos="fade-right"
      className="bg-zinc-800 text-white min-h-screen flex items-center justify-between px-10 bg-white relative"
    >
      {/* Left Section: Text Content */}
      <div className="text-white max-w-xl">
        <h1 className="text-5xl font-bold text-white mb-4">YAHYA AI</h1>
        <p className="text-white text-lg mb-6">
          YAHYA AI is a powerful CODE Reviewer which helps to improve the coding
          style and beautify the coding style ...
        </p>
        <button
          onClick={HandleClick}
          className="bg-grey-600 user-select:none text-black hover:bg-white-700 hover:scale-[1.05] hover:text-black px-6 py-2 rounded-md font-semibold flex items-center gap-2 transition"
        >
          YAHYA AI <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Right Section: Image Placeholder */}
      <div className="w-[280px] h-[280px]">
        <img
          src="./src/images/racoon.webp" // Replace with raccoon image path
          alt="Mascot"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
