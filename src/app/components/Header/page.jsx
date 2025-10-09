// // // "use client";
// // // import { useState } from "react";
// // // import { FaBars } from "react-icons/fa";

// // // export default function Header() {
// // //   const [open, setOpen] = useState(false);

// // //   return (
// // //     <nav className="fixed top-0 left-0 w-full bg-black/90 text-white flex justify-between items-center px-6 py-3 z-50 shadow-md">
// // //       {/* Logo */}
// // //       <h1 className="text-2xl font-bold text-cyan-400">Mubashar Ali</h1>

// // //       {/* Desktop Menu */}
// // //       <ul className="hidden md:flex items-center gap-6">
// // //         <li><a href="Hero" className="hover:text-cyan-400 transition">Home</a></li>
// // //         <li><a href="About" className="hover:text-cyan-400 transition">About</a></li>
// // //         <li><a href="Skills" className="hover:text-cyan-400 transition">Skills</a></li>
// // //         <li><a href="Services" className="hover:text-cyan-400 transition">Services</a></li>
// // //         <li><a href="Contact" className="hover:text-cyan-400 transition">Contact</a></li>
// // //         <a href="contact">
// // //           <button className="bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-transparent hover:text-white border-2 border-cyan-400 transition">
// // //             Contact Me
// // //           </button>
// // //         </a>
// // //       </ul>

// // //       {/* Mobile Menu Button */}
// // //       <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
// // //         <FaBars size={24} />
// // //       </div>

// // //       {/* Mobile Dropdown */}
// // //       {open && (
// // //         <ul className="absolute top-14 right-6 bg-black/95 w-48 flex flex-col items-center gap-4 py-6 rounded-lg shadow-lg md:hidden">
// // //           <li><a href="#home" onClick={() => setOpen(false)} className="hover:text-cyan-400">Home</a></li>
// // //           <li><a href="#about" onClick={() => setOpen(false)} className="hover:text-cyan-400">About</a></li>
// // //           <li><a href="#skills" onClick={() => setOpen(false)} className="hover:text-cyan-400">Skills</a></li>
// // //           <li><a href="#portfolio" onClick={() => setOpen(false)} className="hover:text-cyan-400">Portfolio</a></li>
// // //           <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-cyan-400">Contact</a></li>
// // //         </ul>
// // //       )}
// // //     </nav>
// // //   );
// // // }


// // "use client";
// // import { useState } from "react";
// // import { FaBars, FaTimes } from "react-icons/fa";

// // export default function Header() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <nav className="fixed top-0 left-0 w-full bg-black/90 text-white flex justify-between items-center px-6 py-3 z-50 shadow-md">
// //       {/* Logo */}
// //       <h1 className="text-2xl font-bold text-cyan-400">Mubashar Ali</h1>

// //       {/* Desktop Menu */}
// //       <ul className="hidden md:flex items-center gap-6">
// //         <li>
// //           <a href="hero" className="hover:text-cyan-400 transition">
// //             Home
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#about" className="hover:text-cyan-400 transition">
// //             About
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#skills" className="hover:text-cyan-400 transition">
// //             Skills
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#services" className="hover:text-cyan-400 transition">
// //             Services
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#contact" className="hover:text-cyan-400 transition">
// //             Contact
// //           </a>
// //         </li>
// //         <a href="#contact">
// //           <button className="bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-transparent hover:text-white border-2 border-cyan-400 transition">
// //             Contact Me
// //           </button>
// //         </a>
// //       </ul>

// //       {/* Mobile Menu Button */}
// //       <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
// //         {open ? <FaTimes size={24} /> : <FaBars size={24} />}
// //       </div>

// //       {/* Mobile Dropdown */}
// //       {open && (
// //         <ul className="absolute top-14 right-6 bg-black/95 w-48 flex flex-col items-center gap-4 py-6 rounded-lg shadow-lg md:hidden">
// //           <li>
// //             <a
// //               href="hero"
// //               onClick={() => setOpen(false)}
// //               className="hover:text-cyan-400"
// //             >
// //               Home
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#about"
// //               onClick={() => setOpen(false)}
// //               className="hover:text-cyan-400"
// //             >
// //               About
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#skills"
// //               onClick={() => setOpen(false)}
// //               className="hover:text-cyan-400"
// //             >
// //               Skills
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#services"
// //               onClick={() => setOpen(false)}
// //               className="hover:text-cyan-400"
// //             >
// //               Services
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#contact"
// //               onClick={() => setOpen(false)}
// //               className="hover:text-cyan-400"
// //             >
// //               Contact
// //             </a>
// //           </li>
// //         </ul>
// //       )}
// //     </nav>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-black/90 text-white flex justify-between items-center px-6 py-3 z-50 shadow-md">
//       {/* Logo */}
//       <h1 className="text-2xl font-bold text-cyan-400">Mubashar Ali</h1>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex items-center gap-6">
//         <li>
//           <a href="#hero" className="hover:text-cyan-400 transition">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#about" className="hover:text-cyan-400 transition">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#skills" className="hover:text-cyan-400 transition">
//             Skills
//           </a>
//         </li>
//         <li>
//           <a href="#services" className="hover:text-cyan-400 transition">
//             Services
//           </a>
//         </li>
//         <li>
//           <a href="#contact" className="hover:text-cyan-400 transition">
//             Contact
//           </a>
//         </li>
//         <a href="#contact">
//           <button className="bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-transparent hover:text-white border-2 border-cyan-400 transition">
//             Contact Me
//           </button>
//         </a>
//       </ul>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
//         {open ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <ul className="absolute top-14 right-6 bg-black/95 w-48 flex flex-col items-center gap-4 py-6 rounded-lg shadow-lg md:hidden">
//           <li>
//             <a
//               href="#hero"
//               onClick={() => setOpen(false)}
//               className="hover:text-cyan-400"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               onClick={() => setOpen(false)}
//               className="hover:text-cyan-400"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#skills"
//               onClick={() => setOpen(false)}
//               className="hover:text-cyan-400"
//             >
//               Skills
//             </a>
//           </li>
//           <li>
//             <a
//               href="#services"
//               onClick={() => setOpen(false)}
//               className="hover:text-cyan-400"
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               onClick={() => setOpen(false)}
//               className="hover:text-cyan-400"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }





"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 text-white flex justify-between items-center px-6 py-3 z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-cyan-400">Mubashar Ali</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        <li>
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-cyan-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-cyan-400 transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </li>
        <Link href="/contact">
          <button className="bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-transparent hover:text-white border-2 border-cyan-400 transition">
            Contact Me
          </button>
        </Link>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="absolute top-14 right-6 bg-black/95 w-48 flex flex-col items-center gap-4 py-6 rounded-lg shadow-lg md:hidden">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
