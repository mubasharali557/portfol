"use client";

export default function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "85%" },
    { name: "Next.js", level: "75%" },
    { name: "Node.js & Express", level: "80%" },
    { name: "MongoDB", level: "70%" },
    { name: "Tailwind CSS", level: "90%" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#112e42] text-white px-6 md:px-16 py-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          These are the technologies I work with to build modern, scalable, and
          responsive web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-cyan-400">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-cyan-400 h-3 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
