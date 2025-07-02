import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="py-20 rounded-tr-3xl rounded-tl-3xl  bg-zinc-600">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className='text-[17vw] leading-none font-["FoundersGrotesk"] uppercase -mb-[1.5vw] font-semibold'
        >
          {" "}
          YAHYA AI{" "}
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
