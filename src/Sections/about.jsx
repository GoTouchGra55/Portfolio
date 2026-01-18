import boy from "../Assets/boy.svg";

const About = () => {
  return (
    <section
      id="aboutme"
      className="relative w-screen max-h-[90vh] bg-[#D1855C] px-6 py-24"
    >
      {/* Section title */}
      <div className="max-w-5xl mx-auto mb-5">
        <h1 className="relative group text-[3rem] font-caveatbrush text-[#3A2A1F] inline-block">
          Hey, I’m Shaurya!
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWwwajNrbGlvbTBzM3dlMnhnMjgzdHFhenltY3lyZnF6NGM2b2FraiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/zUQrlUk7Zo51n57CNC/giphy.gif"
            alt="What's up?"
            className="
              absolute
              w-20
              top-55
              right-17
              rotate-75
              transition-all duration-300
              group-hover:-right-15
            "
          />
        </h1>
      </div>

      {/* About content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        <img src={boy} alt="Boy" className="h-60 md:h-72 shrink-0 z-10" />

        <div className="text-center md:text-left text-amber-50 max-w-xl">
          <h2 className="text-4xl font-caveatbrush mb-4">
            Nice to meet you :)
          </h2>
          <p className="text-lg font-mono leading-relaxed">
            I'm a high school student and self-driven developer. I build systems
            that move, think, and interact, from robots to web apps and AI
            projects. I enjoy exploring new tech, tinkering with hardware, and
            turning ideas into real things. Take a look around. I’d love to
            connect or collaborate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
