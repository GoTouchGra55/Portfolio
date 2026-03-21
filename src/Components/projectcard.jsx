const Projectcard = ({ work }) => {
  return (
    <li className="shrink-0 flex flex-col bg-[#1a1a2e] rounded-2xl overflow-hidden w-72 border border-[#ffffff15] hover:border-[#38BDF8]/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
      {/* Image with overlay on hover */}
      <div className="relative overflow-hidden h-44">
        <img
          src={work.image}
          alt={work.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* dark gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#1a1a2e] to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 pb-4 -mt-2">
        {/* Category pill */}
        <span className="text-xs px-2 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] w-fit my-2">
          {work.category}
        </span>

        {/* Title */}
        <h2 className="text-base font-semibold text-white mb-3 leading-tight">
          {work.name}
        </h2>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {work.tech?.map((t, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-full bg-[#ffffff08] text-gray-400 border border-[#ffffff10]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm text-[#38BDF8] hover:text-white transition-colors duration-200 flex items-center gap-1"
        >
          View project ➜
        </a>
      </div>
    </li>
  );
};

export default Projectcard;
