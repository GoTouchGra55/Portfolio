import Navbar from "./Components/navbar";
import cat from "./Assets/cat.png";

const App = () => {
  return (
    <div className="bg-[#1c3144] h-screen w-screen">
      <Navbar />
      <div className="flex justify-center">
        <img
          src="src/Assets/shuttle.svg"
          alt="left blob"
          className="absolute -top-80 -left-10 rotate-12 opacity-80 animate-move1 scale-50"
        />
        <div className="mt-70 text-5xl z-10 text-gray-400 group">
          <h1>
            Turning{" "}
            <span
              className="group relative inline-flex items-center
              font-rubikdist text-yellow-300
              transition-all duration-300 ease-out
              hover:text-yellow-200
              hover:scale-110 hover:rotate-6"
            >
              Ideas
              <img
                src="src/Assets/lightbulb.svg"
                alt="idea"
                className="absolute -top-6.5 right-26 w-10 h-10
               opacity-0 scale-75
               group-hover:scale-100
               group-hover:-rotate-400
               group-hover:opacity-100
               transition-all duration-400"
              />
            </span>{" "}
            Into <span className="text-red-400 font-bold">Action</span>
          </h1>
          <p className="text-zinc-300 text-2xl text-center mt-3 font-extralight">
            Web Electronics Robotics
          </p>
        </div>
        <img
          src={cat}
          alt="right blob"
          className="absolute scale-30 right-1/8 animate-move2"
        />
      </div>
      <svg
        className="absolute bottom-0 w-full h-64"
        viewBox="0 0 1400 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#D1855C"
          d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,165.3C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default App;
