"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-[#081b29] text-white"
    >
      {/* Left Side Text */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h3 className="text-lg md:text-xl text-cyan-400">Hello, my name is</h3>
        <h1 className="text-4xl md:text-5xl font-bold">Mubashar Ali</h1>
        <h3 className="text-2xl md:text-3xl">
          And I&apos;m a <span className="text-cyan-400">Web Developer</span>
        </h3>
        <p className="text-gray-300 max-w-xl">
          I am a passionate Full Stack Web Developer with experience in building
          responsive websites and web applications using modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-cyan-400 text-black px-6 py-2 rounded-full hover:bg-transparent hover:text-white hover:border-2 hover:border-cyan-400 transition"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            className="border-2 border-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition"
          >
            Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start mt-6 text-cyan-400 text-2xl">
          <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank"><FaGithub /></a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/Mubashar.jpg"
          alt="Mubashar Ali"
          width={350}
          height={350}
          className="rounded-full border-4 border-cyan-400 shadow-lg"
        />
      </div>
    </section>
  );
}
