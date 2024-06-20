import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience";
import Hobbies from "./Hobbies";

const Resume = () => {
   const [educationData, setEducationData] = useState(false);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(true);
   const [achievementData, setAchievementData] = useState(false);
   const [hobbiesData, setHobbiesData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex flex-col justify-center items-center text-center mb-8">
        <Title title="" des="My Resume"/> 
        <button 
        className="text-xl uppercase text-designColor font-semibold mt-1 px-4 py-2 rounded-lg bg-red-50 text-white hover:bg-red-300">
       <a href="https://drive.google.com/file/d/1vSvo1B6tzF2gU2ishnoHdx7qzRdSqL1c/view?usp=sharing" target="_blank">Download my Resume</a>
      </button>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
        <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false) &
              setHobbiesData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false) &
              setHobbiesData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false) &
              setHobbiesData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true) &
              setHobbiesData(false)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements & Certifications
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false) &
              setHobbiesData(true)
            }
            className={`${
              hobbiesData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Hobbies
          </li>
        </ul>
      </div>
      {experienceData && <Experience />}
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {hobbiesData && <Hobbies />}
 
    </section>
  );
}

export default Resume