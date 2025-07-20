import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  const renderSection = (title, subtitle, items) => (
    <div className="w-full lgl:w-1/2">
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-1">
        <p className="text-sm text-designColor tracking-[4px] uppercase">{subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 pl-4">
        {items.map((item, i) => (
          <ResumeCard key={i} {...item} />
        ))}
      </div>
    </div>
  );

  const achievements = [
    {
      title: "Best Manoeuvrable Vehicle Award",
      subTitle: "SAE India Southern Section",
      result: "2022",
      des: "Awarded for designing an exceptionally maneuverable electric two-wheeler in a competitive event.",
    },
    {
      title: "380+ Data Structures and Algorithm Questions Solved",
      subTitle: "LeetCode",
      result: "2024",
      des: "Sharpened problem-solving skills with over 380 solved questions.",
    },
  ];

  const certifications = [
    {
      title: "Business English Certificate - Preliminary",
      subTitle: "Cambridge - London",
      result: "Sep 2023",
      des: "Certified in foundational business English by Cambridge, UK.",
    },
    {
      title: "Excel Essential Training",
      subTitle: "LinkedIn Learning",
      result: "Aug 2023",
      des: "Mastered Excel for data analysis, visualization, and advanced functions.",
    },
    {
      title: "Statistics",
      subTitle: "365 Data Science",
      result: "Nov 2022",
      des: "Learned core statistics for data science with practical application.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {renderSection("Achievements", "2022 - Present", achievements)}
      {renderSection("Certifications", "2022 - Present", certifications)}
    </motion.div>
  );
};

export default Achievement;


// import React from "react";
// import { motion } from "framer-motion";
// import ResumeCard from "./ResumeCard";

// const Achievement = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
//     >
//       <div>
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Best Manoeuvrable Vehicle Award"
//             subTitle="SAE India Southern Section - Dr. G. Padmanabham Memorial Electric
//             Two Wheeler Design Competition"
//             result="2022"
//             des="Was part of a team recognized for designing an electric
//             two-wheeler with exceptional maneuverability.
//             This competition experience honed my teamwork and problem-solving skills."
//           />
//           <ResumeCard
//             title="380+ Data Structures and Algorithm Question Solved"
//             subTitle="Leetcode"
//             result="January 2024 - Present"
//             des="Sharpened problem-solving skills by tackling over
//             250 Data Structures and Algorithms challenges on LeetCode."
//           />
//         </div>
//       </div>
//       <div>
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Certification</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Business English Certificate - Preliminary"
//             subTitle="Cambridge - London"
//             result="Septemer 2023"
//             des="Strong foundation in business English, London-tested (BEC Preliminary)."
//           />
//           <ResumeCard
//             title="Excel Essential Training"
//             subTitle="LinkedIn Learning"
//             result="August 2023"
//             des="Completed Excel Essential Training by LinkedIn Learning in August 2023,
//             gaining proficiency in data analysis, visualization,
//             and advanced spreadsheet functions."
//           />
//           <ResumeCard
//             title="Statistics"
//             subTitle="365 Data Science"
//             result="November 2022"
//             des="Strengthened my statistical foundation for data analysis,
//             applying concepts through practical exercises."
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Achievement;
