import {
  SiArduino,
  SiReact,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiPytorch,
  SiDocker,
  SiLinux,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiNetlify,
  SiGit,
  SiGithub,
  SiGnubash,
  SiVercel,
  SiStmicroelectronics,
  SiKicad,
  SiFreecad,
} from "react-icons/si";

const skills = [
  // Core Programming
  {
    name: "JavaScript",
    category: "Core Programming",
    icon: <SiJavascript className="w-10 h-10 text-yellow-300" />,
  },
  {
    name: "Python",
    category: "Core Programming",
    icon: <SiPython className="w-10 h-10 text-yellow-300" />,
  },
  {
    name: "C",
    category: "Core Programming",
    icon: <SiC className="w-10 h-10 text-blue-600" />,
  },
  {
    name: "C++",
    category: "Core Programming",
    icon: <SiCplusplus className="w-10 h-10 text-blue-600" />,
  },
  {
    name: "Bash",
    category: "Core Programming",
    icon: <SiGnubash className="w-10 h-10 text-white" />,
  },

  // Web Development
  {
    name: "React",
    category: "Web Development",
    icon: <SiReact className="w-10 h-10 text-cyan-400" />,
  },
  {
    name: "TailwindCSS",
    category: "Web Development",
    icon: <SiTailwindcss className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "HTML",
    category: "Web Development",
    icon: <SiHtml5 className="w-10 h-10 text-orange-600" />,
  },
  {
    name: "CSS",
    category: "Web Development",
    icon: <SiCss3 className="w-10 h-10 text-blue-500" />,
  },
  {
    name: "NodeJS",
    category: "Web Development",
    icon: <SiNodedotjs className="w-10 h-10 text-green-500" />,
  },
  {
    name: "Supabase",
    category: "Web Development",
    icon: <SiSupabase className="w-10 h-10 text-green-400" />,
  },
  {
    name: "MongoDB",
    category: "Web Development",
    icon: <SiMongodb className="w-10 h-10 text-green-400" />,
  },
  {
    name: "PostgreSQL",
    category: "Web Development",
    icon: <SiPostgresql className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "Postman",
    category: "Web Development",
    icon: <SiPostman className="w-10 h-10 text-orange-400" />,
  },

  // ML & Robotics
  {
    name: "PyTorch",
    category: "ML & Robotics",
    icon: <SiPytorch className="w-10 h-10 text-red-500" />,
  },
  {
    name: "Arduino",
    category: "ML & Robotics",
    icon: <SiArduino className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "STM32",
    category: "ML & Robotics",
    icon: <SiStmicroelectronics className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "KiCAD",
    category: "ML & Robotics",
    icon: <SiKicad className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "FreeCAD",
    category: "ML & Robotics",
    icon: <SiFreecad className="w-10 h-10 text-red-400" />,
  },

  // DevOps & Infrastructure
  {
    name: "Docker",
    category: "DevOps & Infrastructure",
    icon: <SiDocker className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "Linux",
    category: "DevOps & Infrastructure",
    icon: <SiLinux className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "Git",
    category: "DevOps & Infrastructure",
    icon: <SiGit className="w-10 h-10 text-red-500/70" />,
  },
  {
    name: "Github",
    category: "DevOps & Infrastructure",
    icon: <SiGithub className="w-10 h-10 text-white" />,
  },
  {
    name: "Netlify",
    category: "DevOps & Infrastructure",
    icon: <SiNetlify className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "Vercel",
    category: "DevOps & Infrastructure",
    icon: <SiVercel className="w-10 h-10 text-white" />,
  },
];

const Skills = () => {
  const categories = [
    "Core Programming",
    "Web Development",
    "ML & Robotics",
    "DevOps & Infrastructure",
  ];

  return (
    <div id="skills" className="bg-[#D1855C] w-screen py-20 px-10 -mt-20">
      <div className="text-center mb-10">
        <h1 className="text-[3rem] font-caveatbrush text-[#3A2A1F]">
          Enough with the fluff, what can I actually do ???
        </h1>
      </div>

      <section className="flex flex-wrap justify-center gap-10 max-w-[90vw] mx-auto">
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category,
          );
          return (
            <div key={category}>
              <h2 className="flex justify-center text-lg md:text-xl font-semibold mb-4 text-neutral-100">
                <span className="px-3 py-1 rounded-md bg-black/20">
                  {category}
                </span>
              </h2>
              <div className="flex flex-col gap-2">
                {categorySkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center bg-gray-800 p-2 rounded-tr-2xl rounded-bl-2xl rounded-sm shadow-2xl shadow-[#1E1E2F] hover:shadow-3xl hover:shadow-[#1E1E2F]/70 transition-all duration-300 hover:scale-105"
                  >
                    {skill.icon}
                    <span className="text-white text-xl ml-2">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Skills;
