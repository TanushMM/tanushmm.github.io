import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Hobbies from "./Hobbies";
import { resumeLink } from "../../constants/index"

const Resume = () => {
  const [activeSection, setActiveSection] = useState("skills");

  const tabs = [
    { key: "skills", label: "Professional Skills" },
    { key: "education", label: "Education" },
    { key: "achievements", label: "Achievements & Certifications" },
    { key: "hobbies", label: "Hobbies" },
  ];

  return (
    <section id="resume" className="w-full py-20 border-b border-b-black">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="mb-12 flex items-center justify-between">
          <Title title="" des="My Resume" />
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-white bg-designColor px-6 py-2 rounded-md font-semibold shadow-md hover:bg-opacity-80 transition"
          >
            Download My Resume
          </a>
        </div>


        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              className={`resumeLi text-sm md:text-base px-4 py-2 rounded-md font-medium border ${activeSection === tab.key
                ? "border-designColor bg-designColor text-white"
                : "border-transparent hover:border-designColor hover:text-designColor"
                } transition`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeSection === "education" && <Education />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "achievements" && <Achievement />}
        {activeSection === "hobbies" && <Hobbies />}
      </div>
    </section>
  );
};

export default Resume;


// import React, { useState } from 'react'
// import Title from '../layouts/Title';
// import Education from './Education';
// import Skills from './Skills';
// import Achievement from './Achievement';
// import Hobbies from "./Hobbies";

// const Resume = () => {
//   const [educationData, setEducationData] = useState(false);
//   const [skillData, setSkillData] = useState(true);
//   const [achievementData, setAchievementData] = useState(false);
//   const [hobbiesData, setHobbiesData] = useState(false);
//   return (
//     <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
//       <div className="flex flex-col justify-center items-center text-center mb-8">
//         <Title title="" des="My Resume" />
//         <button
//           className="text-xl uppercase text-designColor font-semibold mt-1 px-4 py-2 rounded-lg bg-red-50 text-white hover:bg-red-300">
//           <a href="LINK" target="_blank">Download my Resume</a>
//         </button>
//       </div>
//       <div>
//         <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
//           <li
//             onClick={() =>
//               setEducationData(false) &
//               setSkillData(true) &
//               setAchievementData(false) &
//               setHobbiesData(false)
//             }
//             className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
//               } resumeLi`}
//           >
//             Professional Skills
//           </li>
//           <li
//             onClick={() =>
//               setEducationData(true) &
//               setSkillData(false) &
//               setAchievementData(false) &
//               setHobbiesData(false)
//             }
//             className={`${educationData
//               ? "border-designColor rounded-lg"
//               : "border-transparent"
//               } resumeLi`}
//           >
//             Education
//           </li>
//           <li
//             onClick={() =>
//               setEducationData(false) &
//               setSkillData(false) &
//               setAchievementData(true) &
//               setHobbiesData(false)
//             }
//             className={`${achievementData
//               ? "border-designColor rounded-lg"
//               : "border-transparent"
//               } resumeLi`}
//           >
//             Achievements & Certifications
//           </li>
//           <li
//             onClick={() =>
//               setEducationData(false) &
//               setSkillData(false) &
//               setAchievementData(false) &
//               setHobbiesData(true)
//             }
//             className={`${hobbiesData
//               ? "border-designColor rounded-lg"
//               : "border-transparent"
//               } resumeLi`}
//           >
//             Hobbies
//           </li>
//         </ul>
//       </div>
//       {educationData && <Education />}
//       {skillData && <Skills />}
//       {achievementData && <Achievement />}
//       {hobbiesData && <Hobbies />}

//     </section>
//   );
// }

// export default Resume