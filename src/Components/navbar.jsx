import { useState } from "react";

const navItems = ["About Me", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-screen z-50 bg-linear-to-b from-gray-800/30 to-gray-800/5 backdrop-blur-xs font-sans text-white">
      {/* Top */}
      <div className="flex justify-between items-center h-23 px-10">
        <div className="text-4xl text-blue-200 font-gloria md:ml-20 ml-2">
          Shaurya Tamang
        </div>

        <section className="hidden md:flex mr-30 gap-8 font-extralight text-2xl">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className="transition duration-300 hover:text-red-300"
            >
              {item}
            </a>
          ))}
        </section>

        {/* List */}
        <button
          className="md:hidden text-3xl transition duration-150 hover:text-red-500 cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* dropdown */}
      <section
        className={`md:hidden flex flex-col items-center gap-6 text-xl font-extralight overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-100 py-10" : "max-h-0"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, "")}`}
            onClick={() => setOpen(false)}
            className="transition duration-300 hover:text-red-300"
          >
            {item}
          </a>
        ))}
      </section>
    </div>
  );
};

export default Navbar;
