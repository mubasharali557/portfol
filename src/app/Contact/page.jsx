"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#081b29] text-white px-6 md:px-16 py-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          I’d love to hear from you! Feel free to reach out for collaborations,
          freelance projects, or just a friendly chat.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p className="text-gray-300">
            You can contact me directly through this form or via my email and
            phone number below:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="text-cyan-400 font-semibold">📧 Email:</span>{" "}
              alimubasharali732@gmail.com
            </li>
            <li>
              <span className="text-cyan-400 font-semibold">📱 Phone:</span>{" "}
              03245233273
            </li>
            <li>
              <span className="text-cyan-400 font-semibold">🌐 Portfolio:</span>{" "}
              <a
                href="https://zynof.com"
                target="_blank"
                className="hover:underline"
              >
                zynof.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <form className="bg-[#112e42] p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-cyan-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-transparent hover:text-white hover:border-2 hover:border-cyan-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
