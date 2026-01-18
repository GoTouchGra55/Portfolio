import Navbar from "./Components/navbar";
import About from "./Sections/about";
import Footer from "./Sections/footer";
import Hero from "./Sections/hero";
import Skills from "./Sections/skills";
import Projects from "./Sections/projects";
import Contact from "./Sections/contact";

const App = () => {
  return (
    <div className="bg-[#1c3144] min-h-screen w-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* HERO + CANYONS */}
        <section className="relative min-h-screen overflow-hidden">
          <Hero />

          {/* BACK CANYON */}
          <svg
            className="absolute bottom-0 w-[101vw] h-74 z-0 animate-canyon [animation-delay:3000ms]"
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
            className="absolute bottom-0 w-[105vw] h-64 z-10 animate-canyon"
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
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
