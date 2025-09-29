"use client";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-20 bg-[#112e42] text-white"
    >
      {/* Left Side Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/Mubashar.jpg"
          alt="About Mubashar Ali"
          width={350}
          height={350}
          className="rounded-2xl shadow-lg border-4 border-cyan-400"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-4xl font-bold">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <h3 className="text-2xl font-semibold">
          Full Stack <span className="text-cyan-400">Web Developer</span>
        </h3>
        <p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
          I am Mubashar Ali, a passionate Web Developer with expertise in
          building modern, responsive, and user-friendly websites. I have hands-on
          experience in HTML, CSS, JavaScript, React, Node.js, and Tailwind CSS.
          My goal is to deliver high-quality digital solutions that help brands
          grow online.
        </p>

        <a
          href="#services"
          className="inline-block bg-cyan-400 text-black px-6 py-2 rounded-full hover:bg-transparent hover:text-white hover:border-2 hover:border-cyan-400 transition"
        >
          More About Me
        </a>
      </div>
    </section>
  );
}
