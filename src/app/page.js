"use client";
import { useEffect, useState } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { motion } from "framer-motion";

import { 
  FaFacebook, 
  FaLinkedin, 
  FaWhatsapp, 
  FaGithub, 
  FaGlobe, 
  FaPaintBrush, 
  FaCog, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(".text", {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "MERN Developer",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, type: "spring" },
    }),
  };

  const navItems = [
    { name: "Home", link: "Hero" },
    { name: "About", link: "About" },
    { name: "Skills", link: "Skills" },
    { name: "Services", link: "Services" },
    { name: "Contact", link: "Contact" },
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Mubashar Ali</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-300">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.link} className="hover:text-cyan-400 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 shadow-md transition"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4">
            <ul className="flex flex-col gap-4 text-gray-300">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="block hover:text-cyan-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="Contact"
                  className="block bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 shadow-md transition"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 min-h-screen pt-28 gap-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6 max-w-xl"
        >
          <h3 className="text-lg">👋 Hello Its Me</h3>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Mubashar Ali
          </h1>
          <h3 className="text-2xl">
            And Im a <span className="text-cyan-400 text"></span>
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Im a Full Stack Developer with a year of experience, passionate
            about building dynamic web applications. I enjoy tackling challenges
            and continuously improving my skills in both front-end and back-end
            technologies.
          </p>

          <div className="flex gap-5 text-3xl">
            {[ 
              { icon: <FaFacebook />, link: "https://facebook.com" },
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              { icon: <FaWhatsapp />, link: "https://wa.me/923245233273" },
              { icon: <FaGithub />, link: "https://github.com/mubasharali557" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                whileHover={{ scale: 1.3, rotate: 5 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <a
            href="#about"
            className="bg-cyan-500 px-6 py-3 rounded-lg inline-block hover:bg-cyan-600 shadow-lg transition"
          >
            More About Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-30 animate-pulse"></div>
            <Image
              src="/Mubashar.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-cyan-500 shadow-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-16 py-20 bg-gray-950 text-white">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          About Me
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          I am Mubashar Ali, a passionate Full Stack Developer with expertise in
          building modern, responsive web applications using the latest
          technologies. I thrive on solving complex problems and delivering
          high-quality solutions.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-16 py-20 bg-gray-900">
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
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 md:px-16 py-20 bg-gray-950">
        <h1 className="text-4xl font-bold text-center">
          My <span className="text-cyan-400">Skills</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {[
            { name: "HTML", icon: "bxl-html5", color: "#c95d2e" },
            { name: "CSS", icon: "bxl-css3", color: "#147bbc" },
            { name: "JavaScript", icon: "bxl-javascript", color: "#b0bc1e" },
            { name: "Python", icon: "bxl-python", color: "#c32ec9" },
            { name: "React", icon: "bxl-react", color: "#00eeff" },
            { name: "Next.js", icon: "bxl-nodejs", color: "red" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4 bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-cyan-400/20 transition"
            >
              <i className={`bx ${skill.icon} text-4xl`} style={{ color: skill.color }}></i>
              <span className="font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-16 py-20 bg-gray-800">
        <h2 className="text-4xl font-bold text-center">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-4">Let’s work together ✨</h4>
            <p className="text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <ul className="mt-6 space-y-3">
              <li><i className="bx bxs-send text-cyan-400"></i> mubasharaliearn@gmail.com</li>
              <li><i className="bx bxs-phone text-cyan-400"></i> 03245233273 / 03140434545</li>
            </ul>
            <div className="flex gap-4 text-3xl mt-6">
              <a href="https://facebook.com" className="hover:text-cyan-400"><i className="bx bxl-facebook-circle"></i></a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-cyan-400"><i className="bx bxl-linkedin"></i></a>
              <a href="https://wa.me/923245233273" target="_blank" className="hover:text-cyan-400"><i className="bx bxl-whatsapp"></i></a>
              <a href="https://github.com/mubasharali557" className="hover:text-cyan-400"><i className="bx bxl-github"></i></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Enter your Name" className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none" />
            <input type="email" placeholder="Enter your Email" className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none" />
            <input type="text" placeholder="Enter Your Subject" className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none" />
            <textarea rows="5" placeholder="Enter Your Message" className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none"></textarea>
            <button type="submit" className="bg-cyan-500 py-3 rounded hover:bg-cyan-600 transition shadow-lg">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © 2025 Mubashar Ali. All rights reserved.
      </footer>
    </div>
  );
}
