import React from 'react';

const Card = ({ title, icon }) => {
  return (
    <div className="w-full px-4 py-6 rounded-lg shadow-md flex flex-col items-center justify-center
      bg-gradient-to-r from-[#1a1c1f] to-[#2a2d30]
      hover:bg-gradient-to-tr hover:from-[#23272e] hover:to-[#3d3f45]
      hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out group">

      <div className="text-4xl text-designColor mb-3 transition-transform duration-300 group-hover:rotate-6">
        {icon ? icon : (
          <div className="flex flex-col gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="w-6 h-[2px] rounded bg-designColor block" />
            ))}
          </div>
        )}
      </div>

      <h2 className="text-base md:text-lg text-center font-titleFont font-semibold text-gray-300">
        {title}
      </h2>
    </div>
  );
};

export default Card;

