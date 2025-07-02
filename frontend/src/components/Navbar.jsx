import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {Link} from "react-router-dom";
const navItems = [
  { name: "Home", to: "/" },
  { name: "Documentation", to: "/doc" },
  { name: "Contact", href: "/developedby" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" bg-zinc-800 fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animation */}
          <div className="flex w-[50px] h-[50px]">
            <img
              src="./src/images/racoon.webp" // Replace with raccoon image path
              alt="Mascot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Links */}
          <div className="options flex gap-2">
            <a className="text-white p-2" href="/">
              Home
            </a>
            <a className=" text-white p-2" href="/doc">
              Documentation
            </a>
            <a className="text-white p-2" href="/developedby">
              Developer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-inner overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 dark:text-gray-300 font-medium"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: 0.1 * navItems.indexOf(item) }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Removed duplicate export default statement
