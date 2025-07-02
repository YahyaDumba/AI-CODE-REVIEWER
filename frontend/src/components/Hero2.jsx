import React from "react";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
const Hero2 = () => {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true
        })
    })
  return (
    <div  data-aos="fade-left" className="p-8 bg-zinc-800 text-white space-y-16">
        {/* Bottom Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold">To Solve Your Problems</h2>

          <div>
            <h3 className="font-semibold">Instant Code Feedback
            </h3>
            <p className="text-zinc-300 text-sm">
            Let our AI instantly review your code and highlight errors, bad practices, or potential bugs before you even run it.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Improvement Suggestions
            </h3>
            <p className="text-zinc-300 text-sm">
            Receive intelligent suggestions to optimize your code's performance, readability, and efficiency—all powered by AI.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Learn While You Code
            </h3>
            <p className="text-zinc-300 text-sm">
            Understand not just what to fix, but why it matters. Our reviewer teaches best practices with clear, simple explanations.
            </p>
          </div>

          <div className="space-x-4 mt-4">
            <button className="px-4 py-2 bg-black text-white rounded">
              Button
            </button>
           
          </div>
        </div>

        <img
          src="https://imgs.search.brave.com/CX7BtkKAiS8hUQuO6HzqlCnmUiuWA4B7jr4OMlL4DT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1yZW5kZXIt/YWJzdHJhY3QtbWlu/aW1hbC1iYWNrZ3Jv/dW5kLXBpbmstYmx1/ZS1uZW9uLWxpZ2h0/LXRyaWFuZ3VsYXIt/ZnJhbWVfMjA0Mjk4/LTcyNS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw"
          alt="fruit layout"
          className="w-full h-full object-cover rounded-lg shadow"
        />
      </section>
    </div>
  );
};

export default Hero2;
