import cat from "../Assets/cat.png";
import shuttle from "../Assets/shuttle.svg";
import lightbulb from "../Assets/lightbulb.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* LEFT ASSET */}
      <img
        src={shuttle}
        alt="left blob"
        className="absolute -bottom-30 -left-2 rotate-12 opacity-80 scale-50 animate-move1 pointer-events-none z-0"
      />

      {/* RIGHT ASSET */}
      <img
        src={cat}
        alt="right blob"
        className="absolute bottom-[20%] right-[12%] scale-30 animate-move2 pointer-events-none z-0"
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center text-gray-400">
        <h1 className="text-[3rem]">
          Turning{" "}
          <span className="group relative inline-flex items-center font-rubikdist text-yellow-300 transition-all duration-300 ease-out hover:text-yellow-200 hover:scale-110 hover:rotate-6">
            Ideas
            <img
              src={lightbulb}
              alt="idea"
              className="absolute -top-5 right-26 w-10 h-10 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-320 transition-all duration-300"
            />
          </span>{" "}
          Into <span className="text-red-400 font-bold">Action</span>
        </h1>

        <p className="text-[1.2rem] font-extralight text-zinc-300">
          I build systems that move, think, and interact (also websites)
        </p>
      </div>

      {/* BACK CANYON */}
      <svg
        className="absolute bottom-0 w-full h-74 z-0"
        viewBox="0 10 1300 410"
        preserveAspectRatio="none"
      >
        <path
          fill="#E16531"
          d="M 0 132 L 92 119 C 146 107 203 136 239 147
             C 335 185 405 182 536 135
             C 629 81 753 140 864 176
             C 930 207 984 144 1108 150
             C 1271 200 1306 128 1364 152
             L 1440 320 L 0 320 Z"
        />
      </svg>

      {/* FRONT CANYON */}
      <svg
        className="absolute bottom-0 w-full h-64 z-10"
        viewBox="0 -5 1400 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#D1855C"
          d="M -3 116 L 39 100 C 92 90 192 149 286 119
             C 391 96 480 171 576 165.3
             C 672 160 753 233 864 176
             C 981 114 1030 177 1158 201
             C 1248 224 1314 182 1398 163
             L 1440 320 L 0 320 Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
