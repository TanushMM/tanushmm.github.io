import { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaMediumM, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { navLinksdata, resumeLink } from '../../constants'; // ← import resumeLink

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 fixed top-0 z-50 px-4
      bg-[#0e0e0e]/60 backdrop-blur-md
      font-titleFont border-b border-gray-600
      rounded-xl shadow-lg
      flex items-center justify-between
      landscape:w-[90%] landscape:left-1/2 landscape:-translate-x-1/2 landscape:top-4">

      {/* Empty div for left spacing or logo if needed */}
      <div></div>

      {/* Desktop Nav Centered */}
      <div className="hidden mdl:flex w-full justify-center">
        <ul className="inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}

          {/* ✅ Resume Download Button (Desktop Only) */}
          <li>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-designColor text-white rounded-md font-medium text-sm hover:bg-opacity-80 transition-all"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon on Mobile */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        <FiMenu />
      </span>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="w-[80%] h-screen fixed top-0 left-0 bg-[#0e0e0e]/90 backdrop-blur-md p-4 scrollbar-hide border-r border-gray-700 z-50">
          <div className="flex flex-col gap-8 py-2 relative items-center text-center">

            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              {/* ✅ Resume Download Button (Mobile) */}
              <li>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-designColor text-white rounded-md font-medium text-sm hover:bg-opacity-80 transition-all"
                >
                  Download Resume
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4 flex-wrap justify-center">
                <span className="bannerIcon">
                  <a
                    href="https://www.linkedin.com/in/tanush-mm/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
                <span className="bannerIcon">
                  <a
                    href="https://medium.com/@tanushmmofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaMediumM />
                  </a>
                </span>
                <span className="bannerIcon">
                  <a
                    href="https://leetcode.com/u/TanushMM/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLeetcode />
                  </a>
                </span>
              </div>
            </div>

            {/* Close Button */}
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;


// import { useState } from 'react';
// import { Link } from "react-scroll";
// import { FiMenu } from "react-icons/fi";
// import { MdClose } from "react-icons/md";
// import { FaMediumM, FaLinkedinIn } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// import { navLinksdata } from '../../constants';

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="w-full h-24 fixed top-0 z-50 px-4
//       bg-[#0e0e0e]/60 backdrop-blur-md
//       font-titleFont border-b border-gray-600
//       rounded-xl shadow-lg
//       flex items-center justify-between
//       landscape:w-[90%] landscape:left-1/2 landscape:-translate-x-1/2 landscape:top-4">

//       {/* Empty div for left spacing or logo if needed */}
//       <div></div>

//       {/* Desktop Nav Centered */}
//       <div className="hidden mdl:flex w-full justify-center">
//         <ul className="inline-flex items-center gap-6 lg:gap-10">
//           {navLinksdata.map(({ _id, title, link }) => (
//             <li
//               key={_id}
//               className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
//             >
//               <Link
//                 activeClass="active"
//                 to={link}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 {title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger Icon on Mobile */}
//       <span
//         onClick={() => setShowMenu(!showMenu)}
//         className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
//       >
//         <FiMenu />
//       </span>

//       {/* Mobile Menu */}
//       {showMenu && (
//         <div className="w-[80%] h-screen fixed top-0 left-0 bg-[#0e0e0e]/90 backdrop-blur-md p-4 scrollbar-hide border-r border-gray-700 z-50">
//           <div className="flex flex-col gap-8 py-2 relative items-center text-center">

//             <ul className="flex flex-col gap-4">
//               {navLinksdata.map((item) => (
//                 <li
//                   key={item._id}
//                   className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
//                 >
//                   <Link
//                     onClick={() => setShowMenu(false)}
//                     activeClass="active"
//                     to={item.link}
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                   >
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Social Links */}
//             <div className="flex flex-col gap-4">
//               <h2 className="text-base uppercase font-titleFont mb-4">
//                 Find me in
//               </h2>
//               <div className="flex gap-4 flex-wrap justify-center">
//                 <span className="bannerIcon">
//                   <a
//                     href="https://www.linkedin.com/in/tanush-mm/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedinIn />
//                   </a>
//                 </span>
//                 <span className="bannerIcon">
//                   <a
//                     href="https://medium.com/@tanushmmofficial"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaMediumM />
//                   </a>
//                 </span>
//                 <span className="bannerIcon">
//                   <a
//                     href="https://leetcode.com/u/TanushMM/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <SiLeetcode />
//                   </a>
//                 </span>
//               </div>
//             </div>

//             {/* Close Button */}
//             <span
//               onClick={() => setShowMenu(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
//             >
//               <MdClose />
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
