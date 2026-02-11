import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

import dsaImg from "../assets/certificates/dsa.png";
import reactImg from "../assets/certificates/react.png";
import internshipImg from "../assets/certificates/internship.png";
import aiImg from "../assets/certificates/ai.png";

import dsaPdf from "../assets/certificates/dsa.pdf";
import reactPdf from "../assets/certificates/react.pdf";
import internshipPdf from "../assets/certificates/internship.pdf";
import aiPdf from "../assets/certificates/ai.pdf";

const certificates = [
  {
    title: "",
    image: dsaImg,
    pdf: dsaPdf,
  },
  {
    title: "",
    image: reactImg,
    pdf: reactPdf,
  },
  {
    title: "",
    image: internshipImg,
    pdf: internshipPdf,
  },
  {
    title: "",
    image: aiImg,
    pdf: aiPdf,
  },
];

const Achievements = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));

  return (
    <section id="achievements" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Achievements & Certificates
        </motion.h2>

        <div className="relative flex items-center justify-center">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-12 bg-gray-800 p-3 rounded-full hover:bg-cyan-500 transition"
          >
            <FaChevronLeft size={22} />
          </button>

          {/* SLIDE */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl overflow-hidden max-w-lg w-full"
          >
            <img
              src={certificates[index].image}
              alt="certificate"
              className="w-full h-[300px] object-contain bg-black"
            />

            <div className="p-6 flex flex-col items-center gap-4">
              <h3 className="text-lg font-semibold text-center">
                {certificates[index].title}
              </h3>

              <a
                href={certificates[index].pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:scale-105 transition"
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-0 md:-right-12 bg-gray-800 p-3 rounded-full hover:bg-cyan-500 transition"
          >
            <FaChevronRight size={22} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
