const works = [
  {
    name: "RL Blackjack Agent",
    image: "src/Assets/blackjack.png", // replace with actual screenshot
    link: "https://github.com/GoTouchGra55/blackjack-agent",
  },
  {
    name: "Impactor 2025",
    image: "src/Assets/impactor.png",
    link: "https://github.com/GoTouchGra55/Impactor-2025",
  },
  {
    name: "C Shell",
    image: "src/Assets/cshell.png",
    link: "https://github.com/GoTouchGra55/C-shell",
  },
  {
    name: "Web Scraper",
    image: "src/Assets/scraper.png",
    link: "https://github.com/GoTouchGra55/Scrapy-Scraper",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#D1855C] w-screen py-20 px-10 -mt-20 flex flex-col justify-center items-center"
    >
      {/* Section Header */}
      <h1 className="text-[3rem] font-caveatbrush text-[#3A2A1F] mb-12 text-center">
        Here's some of my work (^-^)
      </h1>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-linear-to-br from-[#292B3E] to-[#1E1E2F] rounded-3xl shadow-2xl shadow-[#1E1E2F] overflow-hidden w-72 hover:scale-105 hover:shadow-3xl hover:shadow-[#1E1E2F]/70 transition-all duration-300 px-5 py-4"
          >
            {/* Project Image */}
            <img
              src={work.image}
              alt={work.name}
              className="w-full h-44 object-cover rounded-xl border-2 border-[#38BDF8] mb-4"
            />

            {/* Project Title */}
            <h2 className="text-xl font-semibold text-[#7DD3FC] text-center mb-2">
              {work.name}
            </h2>

            {/* Project Description (optional) */}
            {work.description && (
              <p className="text-neutral-300 text-center text-sm mb-4 px-2">
                {work.description}
              </p>
            )}

            {/* GitHub / Live Link */}
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-6 py-2 bg-[#22C55E] text-[#1E1E2F] rounded-full font-medium hover:bg-[#16A34A] transition-colors duration-200"
            >
              Have a Look
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
