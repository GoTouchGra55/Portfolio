import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const contacts = [
  {
    id: 1,
    icon: <SiGmail size={30} />,
    link: "mailto:shauryatamang.dev@gmail.com",
  },
  {
    id: 2,
    icon: <SiInstagram size={30} />,
    link: "https://www.instagram.com/gotouchgra55/",
  },
  {
    id: 3,
    icon: <SiLinkedin size={30} />,
    link: "https://www.linkedin.com/in/shaurya-t-8a5414396/",
  },
  {
    id: 4,
    icon: <SiGithub size={30} />,
    link: "https://github.com/GoTouchGra55",
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#D1855C] min-w-screen flex flex-wrap justify-center items-center -mt-15"
    >
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzN6c3ZyNHB2Y29ibHozN201bnJ3dXFnZnhvN2ExcXhkYnJrcnAxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GxcptIyuOwo1CjnIl1/giphy.gif"
        alt="Coding"
        className="w-100 h-100 hidden md:inline-block my-20"
      />
      <section className="px-10 flex flex-col">
        <h1 className="font-caveatbrush text-[#3A2A1F] py-5 text-5xl">
          Lets build something{" "}
          <span className="inline-flex align-middle">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a3M5eXBteDMweXB5Mmt3cTdpeGt0bDJwM3diM28zaHRzajN6d3hybiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9dHM/xSDOUKc9iusOSIVQ6f/giphy.gif"
              alt="interesting"
              className="w-50"
            />
          </span>
        </h1>
        <p className="text-xl flex-wrap -mt-5 text-[#3A2A1F] font-extralight">
          I’m open to collaborations, research discussions, and meaningful
          projects.
        </p>
        <div className="flex gap-5 my-5 justify-left text-gray-950">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              className="text-center rounded-lg hover:scale-110 transition-transform duration-300"
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
