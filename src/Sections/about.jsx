import boy from "../Assets/boy.svg";

const About = () => {
  return (
    <section
      id="aboutme"
      className="relative w-screen h-[60vh] bg-[#D1855C] flex justify-center py-16 -mt-10"
    >
      <h1 className="absolute z-20 text-[3rem] -top-5 left-1/6 font-gloria">
        Hey, I'm Shaurya!
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-300 w-[90%] gap-10 p-8">
        {/* Image */}
        <img src={boy} alt="Boy" className="h-60 md:h-72" />

        {/* Text */}
        <div className="text-center md:text-left text-white">
          <h1 className="text-4xl font-bold mb-4 font-gloria">
            Nice to meet you :)
          </h1>
          <p className="text-lg font-mono">
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
