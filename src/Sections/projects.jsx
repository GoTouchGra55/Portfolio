import blackjack from "../Assets/blackjack.png";
import impactor from "../Assets/impactor.png";
import cshell from "../Assets/cshell.png";
import scraper from "../Assets/scraper.png";
import duodec from "../Assets/duodec.png";
import cheetah from "../Assets/MIT_Cheetah.jpg";

import Projectcard from "../Components/projectcard";

const works = [
  {
    name: "Duodec",
    image: duodec,
    link: "https://github.com/GoTouchGra55/Duodec",
    category: "Hardware",
    tech: ["KiCad", "RP2040", "KMK"],
  },
  {
    name: "🚧 J.O.L.T 🚧 🛠️",
    image: cheetah,
    link: "https://github.com/GoTouchGra55/JOLT",
    category: "Robotics",
    tech: ["STM32", "FreeCAD", "KiCAD", "C/HAL"],
  },
  {
    name: "RL Blackjack Agent",
    image: blackjack,
    link: "https://github.com/GoTouchGra55/blackjack-agent",
    category: "ML",
    tech: ["Python", "OpenAI Gym"],
  },
  {
    name: "Impactor 2025",
    image: impactor,
    link: "https://github.com/GoTouchGra55/Impactor-2025",
    category: "Web",
    tech: ["React", "Tailwind"],
  },
  {
    name: "C Shell",
    image: cshell,
    link: "https://github.com/GoTouchGra55/C-shell",
    category: "Systems",
    tech: ["C", "Unix"],
  },
  {
    name: "Web Scraper",
    image: scraper,
    link: "https://github.com/GoTouchGra55/Scrapy-Scraper",
    category: "Python",
    tech: ["Python", "Scrapy"],
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#D1855C] w-screen py-20 -mt-20 flex flex-col justify-center items-center"
    >
      {/* Section Header */}
      <h1 className="text-[3rem] font-caveatbrush text-[#3A2A1F] md:mb-27 mb-30 text-center">
        Here's some of my work (^~^)
      </h1>

      {/* Projects Grid */}
      <div className="flex w-full">
        {works.length < 5 ? (
          <ul className="flex gap-5 -mt-5 justify-items-center animate-infinite-scroll hover:[animation-play-state:paused]">
            {[...works, ...works, ...works, ...works].map((work, idx) => (
              <Projectcard key={idx} work={work} />
            ))}
          </ul>
        ) : (
          <div className="flex flex-col md:mb-20 mb-30">
            <ul className="flex gap-2 justify-items-center animate-infinite-scroll rotate-2 -mb-50">
              {[...works, ...works, ...works, ...works].map((work, idx) => (
                <Projectcard key={idx} work={work} />
              ))}
            </ul>
            <ul className="flex gap-2 justify-items-center animate-infinite-scroll-opp -rotate-2">
              {[...works, ...works, ...works, ...works].map((work, idx) => (
                <Projectcard key={idx} work={work} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
