import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectsCard = ({ title, des, src, link, link2 }) => {
  return (
    <div className="w-full p-5 rounded-xl shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#2b2b2b] hover:from-[#2a2a2a] hover:to-[#3a3a3a] transition duration-300 group">
      <div className="w-full overflow-hidden rounded-md">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={title}
            className="w-full h-60 object-cover rounded-md group-hover:scale-105 duration-300"
          />
        </a>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-designColor uppercase">
            {title}
          </h3>
          <div className="flex gap-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-designColor transition"
            >
              <BsGithub size={20} />
            </a>
            <Link
              to={link2}
              target="_blank"
              className="text-gray-400 hover:text-designColor transition"
            >
              <FaGlobe size={20} />
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed">{des}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;