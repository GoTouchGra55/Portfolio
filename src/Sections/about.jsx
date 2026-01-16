import boy from "../Assets/boy.svg";

const About = () => {
  return (
    <section
      id="aboutme"
      className="relative w-screen max-h-[90vh] bg-[#D1855C] px-6 py-24"
    >
      {/* Section title */}
      <h1 className="group absolute top-5 left-1/6 text-[3rem] font-caveatbrush text-black ">
        Hey, I'm Shaurya!
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWwwajNrbGlvbTBzM3dlMnhnMjgzdHFhenltY3lyZnF6NGM2b2FraiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/zUQrlUk7Zo51n57CNC/giphy.gif"
          alt="What's Up?"
          className="
          w-20 absolute left-20 rotate-75 top-50
          opacity-100 group-hover:opacity-100 group-hover:left-58
          transition-normal linear duration-500
          "
        />
      </h1>

      {/* About content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        <img src={boy} alt="Boy" className="h-60 z-20 md:h-72 shrink-0" />

        <div className="text-center md:text-left text-white max-w-xl">
          <h2 className="text-4xl font-caveatbrush mb-4">Nice to meet you :)</h2>
          <p className="text-lg font-mono leading-relaxed">
            I'm a high school student and self-driven developer. I build systems
            that move, think, and interact — from robots to web apps and AI
            projects. I love exploring new tech, tinkering with hardware, and
            turning ideas into real projects. Take a look around — I’d love to
            connect or collaborate!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
