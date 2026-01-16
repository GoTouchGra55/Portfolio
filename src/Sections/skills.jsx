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
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="w-10 h-10 text-cyan-400" /> },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="w-10 h-10 text-green-400" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-400" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="w-10 h-10 text-orange-400" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-10 h-10 text-yellow-300" />,
  },
  { name: "Netlify", icon: <SiNetlify className="w-10 h-10 text-blue-400" /> },
  { name: "Vercel", icon: <SiVercel className="w-10 h-10 text-blue-400" /> },
  { name: "Python", icon: <SiPython className="w-10 h-10 text-yellow-300" /> },
  { name: "C", icon: <SiC className="w-10 h-10 text-blue-600" /> },
  { name: "C++", icon: <SiCplusplus className="w-10 h-10 text-blue-600" /> },
  { name: "Arduino", icon: <SiArduino className="w-10 h-10 text-blue-400" /> },
  { name: "Pytorch", icon: <SiPytorch className="w-10 h-10 text-red-500" /> },
  { name: "Docker", icon: <SiDocker className="w-10 h-10 text-blue-400" /> },
  { name: "Linux", icon: <SiLinux className="w-10 h-10 text-blue-400" /> },
  {
    name: "NodeJS",
    icon: <SiNodedotjs className="w-10 h-10 text-green-500" />,
  },
  { name: "HTML", icon: <SiHtml5 className="w-10 h-10 text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="w-10 h-10 text-blue-500" /> },
  { name: "Git", icon: <SiGit className="w-10 h-10 text-red-500" /> },
  { name: "Github", icon: <SiGithub className="w-10 h-10 text-white" /> },
  { name: "Bash", icon: <SiGnubash className="w-10 h-10 text-white" /> },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-[#D1855C] w-screen h-80">
      <section className="w-screen flex justify-center">
        <h1 className="absolute -bottom-90 left-1/6 z-30 text-[2.3rem] font-gloria">
          What can I do?
        </h1>
        <div className="flex flex-row flex-wrap max-w-[80vw] mt-6 gap-1">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-row bg-gray-800 rounded-bl-2xl rounded-tr-2xl rounded-sm p-1 overflow-clip"
            >
              {skill.icon}
              <span className="text-white text-xl mt-1 px-1">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
