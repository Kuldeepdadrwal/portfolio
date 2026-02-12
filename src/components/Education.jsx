import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-black text-white rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-8">

          {/* College */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold">
              Malaviya National Institute of Technology (MNIT), Jaipur
            </h3>
            <p className="text-cyan-400 mt-1">
              B.Tech — Electronics & Communication Engineering
            </p>
            <p className="text-gray-400 mt-2">
              2020 – 2024
            </p>
            <p className="mt-3 text-gray-300">
              Focused on Data Structures, Algorithms, Web Development, Core ECE subjects, and Software Engineering.
            </p>
          </div>

          {/* 12th */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-400 transition">
           <h3 className="text-2xl font-semibold">
              Rajat Vidyapeeth Sr. Secondary School Jat Colony Nawalgarh Road, Sikar
            </h3>
            <p className="text-cyan-400 mt-1">
              Class XII | 88.6%
            </p>
            <p className="text-gray-400 mt-2">
              2018 – 2019
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
