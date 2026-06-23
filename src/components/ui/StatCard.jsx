const StatCard = ({ number, label }) => {
  return (
    <div className="text-center group hover:scale-105 transition-transform duration-300">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FE5538] mb-2">
        {number}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider max-w-xs mx-auto">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
