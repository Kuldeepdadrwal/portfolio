import { motion } from "framer-motion";
import healthcareImg from "../assets/project-healthcare.png";
import iskconImg from "../assets/project-iskcon.png";
import portfolio from "../assets/portfolio.png";

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6 mt-20 rounded-3xl">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block pb-2 text-4xl md:text-5xl font-bold leading-[1.2] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-16">

          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                  Low-Cost Automated Paralysis Patient Healthcare Monitoring System
                </h3>

                <p className="text-gray-400 mb-4">
                  B.Tech Major Project — MNIT Jaipur
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Designed and developed a low-cost IoT-based healthcare monitoring and communication
                  system enabling paralysis patients to express needs using gesture-based input,
                  real-time wireless transmission, and GSM-based emergency alerts.
                </p>

                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>• Gesture-based emergency & assistance detection using accelerometer</li>
                  <li>• Wireless communication using RF + GSM modules</li>
                  <li>• SMS-based emergency alert system</li>
                  <li>• Real-time data processing & control flow programming</li>
                  <li>• System architecture, circuit integration & debugging</li>
                </ul>

                <div className="flex flex-wrap gap-3">
                  {["Embedded C", "Arduino", "IoT", "GSM", "RF", "Real-Time"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-600/10 border border-blue-500/30 rounded-full text-sm text-blue-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <img src={healthcareImg} alt="Healthcare System" className="rounded-xl shadow-lg hover:scale-105 transition duration-300 max-h-[320px]" />
              </div>

            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2 text-purple-400">
                  ISKCON Virar — Official Website Design & Deployment
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Designed, developed, and deployed a production-grade WordPress website with
                  focus on responsive UI, performance optimization, security hardening, and SEO
                  best practices delivering a fast, secure, and scalable platform.
                </p>

                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>• Custom responsive UI & dynamic page layouts</li>
                  <li>• Performance optimization using caching & compression</li>
                  <li>• SEO optimization & structured content</li>
                  <li>• Security hardening & automated backup systems</li>
                  <li>• Hosting, deployment, maintenance & version upgrades</li>
                </ul>

                <div className="flex flex-wrap gap-3">
                  {["WordPress", "PHP", "SEO", "Security", "Hosting", "Performance"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/10 border border-purple-500/30 rounded-full text-sm text-purple-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://iskconvirar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-black transition"
                >
                  Visit Website →
                </a>
              </div>

              <div className="flex justify-center">
                <img src={iskconImg} alt="ISKCON Virar Website" className="rounded-xl shadow-lg hover:scale-105 transition duration-300 max-h-[320px]" />
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="text-left">
                <a
                  href="https://your-portfolio-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-2xl font-semibold mb-2 text-green-400 hover:underline hover:text-green-300 transition"
                >
                  Personal Portfolio Website — React + Tailwind CSS
                </a>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Designed and developed a modern, fully responsive portfolio website using React and Tailwind CSS
                  featuring smooth animations, interactive UI, and optimized performance to showcase projects,
                  skills, and experience.
                </p>

                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>• Responsive UI using Tailwind CSS</li>
                  <li>• Framer Motion animations</li>
                  <li>• Modular React component architecture</li>
                  <li>• Optimized performance & accessibility</li>
                  <li>• Live deployment & version control</li>
                </ul>

                <div className="flex flex-wrap gap-3">
                  {["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Deployment"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-green-600/10 border border-green-500/30 rounded-full text-sm text-green-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href="https://your-portfolio-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition"
                  >
                    Live Demo →
                  </a>

                  <a
                    href="https://github.com/your-github/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-700 transition"
                  >
                    GitHub Repo →
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={portfolio}
                  alt="Portfolio Website"
                  className="rounded-xl shadow-lg hover:scale-105 transition duration-300 max-h-[320px]"
                />
              </div>

            </div>
          </motion.div>


        </div>

      </div>
    </section>
  );
};

export default Projects;



