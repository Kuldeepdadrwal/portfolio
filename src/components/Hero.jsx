import { motion } from "framer-motion";
import image from "../assets/image.png";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGg,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Left Content */}
      <div className="text-center md:text-left flex flex-col gap-6 max-w-xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Kuldeep
          </span>
        </motion.h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-400">
          Full Stack Developer • React • Node.js • DSA • Building scalable &
          modern web applications.
        </p>

        {/* Contact Info */}
        <div className="mt-4 flex flex-col gap-4 text-gray-300 text-sm sm:text-base">

          {/* Phone */}
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start text-center md:text-left">
            <FaPhoneAlt className="text-cyan-400 text-xl sm:text-2xl shrink-0" />
            <span className="text-base sm:text-xl break-all">
              +91 6378677070
            </span>
          </div>

          {/* Email */}
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start text-center md:text-left">
            <FaEnvelope className="text-cyan-400 text-xl sm:text-2xl shrink-0" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kuldeepdadrwal01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition break-all text-base sm:text-xl max-w-full"
            >
              kuldeepdadrwal01@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start text-center md:text-left">
            <FaMapMarkerAlt className="text-cyan-400 text-xl sm:text-2xl shrink-0" />
            <span className="text-base sm:text-xl break-words">
              Delhi, India
            </span>
          </div>

        </div>


        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-8 mt-6 text-3xl sm:text-4xl">
          <a
            href="https://github.com/Kuldeepdadrwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kuldeep-dadrwal-b1496b237"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.geeksforgeeks.org/profile/2020uec1645?tab=activity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaGg />
          </a>
        </div>

      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-40"></div>

        <img
          src={image}
          alt="Kuldeep"
          className="relative w-90 h-90 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400 shadow-xl"
        />
      </motion.div>
    </section>
  );
}
