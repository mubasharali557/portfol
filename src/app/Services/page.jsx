import { FaGlobe, FaPaintBrush, FaCog, FaGithub } from "react-icons/fa";
export default function Services() {
  return (
    <section id="services" className="px-6 md:px-16 py-20 bg-gray-950">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        My Services
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          {
            icon: <FaGlobe className="text-5xl text-cyan-400" />,
            title: "Full Stack Development",
            desc: "Building responsive, fast, and scalable web applications tailored to your needs.",
          },
          {
            icon: <FaPaintBrush className="text-5xl text-yellow-400" />,
            title: "Frontend Development",
            desc: "Crafting intuitive and user-friendly designs with modern tools and practices.",
          },
          {
            icon: <FaCog className="text-5xl text-gray-300" />,
            title: "Backend Development",
            desc: "Creating robust, secure, and scalable server-side applications and APIs.",
          },
          {
            icon: <FaGithub className="text-5xl text-orange-500" />,
            title: "GitHub",
            desc: "Managing repositories, version control, and collaborative development.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition text-center"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
