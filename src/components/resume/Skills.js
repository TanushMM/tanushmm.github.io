import React from "react";
import { motion } from "framer-motion";

const skillSectionStyle = "w-full lgl:w-1/2 p-6 rounded-lg shadow-lg bg-black bg-opacity-20 hover:bg-opacity-30 transition duration-300";

const Skills = () => {
  const hardSkills = [
    "Python",
    "Java",
    "System Design",
    "Docker - Containerization",
    "AWS (S3, EC2)",
    "PostgreSQL",
    "MongoDB",
  ];

  const softSkills = [
    "Time Management and Organization",
    "Adaptability",
    "Problem Solving",
    "Critical Thinking",
  ];

  const renderSkills = (skills) =>
    skills.map((skill, i) => (
      <div key={i} className="overflow-x-hidden">
        <p className="text-base font-medium text-neutral-300 group-hover:text-white transition duration-300">
          • {skill}
        </p>
      </div>
    ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className="w-full flex flex-col lgl:flex-row gap-10"
    >
      <div className={skillSectionStyle}>
        <p className="text-sm text-designColor uppercase tracking-widest mb-1">Technical</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Hard Skills</h2>
        <div className="flex flex-col gap-4">{renderSkills(hardSkills)}</div>
      </div>

      <div className={skillSectionStyle}>
        <p className="text-sm text-designColor uppercase tracking-widest mb-1">Personal</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Soft Skills</h2>
        <div className="flex flex-col gap-4">{renderSkills(softSkills)}</div>
      </div>
    </motion.div>
  );
};

export default Skills;


// import React from 'react'
// import { motion } from 'framer-motion';

// const Skills = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
//     >
//       <div className="w-full lgl:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">Hard Skill</h2>
//         </div>
//         <div className="flex flex-col gap-6">
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Python - Data Science</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">SciKit Learn - Python ML Library</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Docker - Containerization</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">AWS (S3, EC2, Elastic Beanstalk, ECR, ECS, CodePipelines)</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Java - Data Structures and Algorithms</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Microsoft Excel</p>
//           </div>
//         </div>
//       </div>

//       <div className="w-full lgl:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">Soft Skill</h2>
//         </div>
//         <div className='className="mt-14 w-full flex flex-col gap-6'>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Time Management and Organization</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Adaptability</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Intrapersonal Skills</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Problem Solving</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Critical Thinking</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Skills