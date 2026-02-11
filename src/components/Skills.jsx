const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "DSA",
  "Git & GitHub",
  "Java",
  "HTML",
  "CSS",
  "C++",
  "MySQL",
  "Python",
  "Power BI",
  "OOPs",
  "Operating System",
  "DBMS",

];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/40 mt-20 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 text-center font-semibold shadow-lg hover:scale-105 hover:border-blue-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

