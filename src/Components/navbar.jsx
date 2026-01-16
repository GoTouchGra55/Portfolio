const navItems = ["About Me", "Skills", "Projects", "Contact"];

const Navbar = () => {
  return (
    <div className="fixed top-0 flex bg-gray-800/30 w-screen h-25 font-sans text-2xl text-white justify-between items-center px-10 z-50">
      <section>
        <div className="hero ml-20 text-4xl text-blue-200 font-gloria">
          Shaurya Tamang
        </div>
      </section>
      <section className="mr-50 flex gap-8 text-white font-extralight">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, "")}`}
            className="transition duration-300 hover:text-red-300 hover:-translate-y-1 hover:animate-wiggle"
          >
            {item}
          </a>
        ))}
      </section>
    </div>
  );
};

export default Navbar;
