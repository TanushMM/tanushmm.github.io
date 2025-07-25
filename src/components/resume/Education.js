import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  const educationItems = [
    {
      title: "B.Tech in Computer Science and Engineering",
      subTitle: "BSA Crescent Institute (2021 - 2025)",
      result: "9.38/10",
      des: "Comprehensive training in computing fundamentals, programming, and system design.",
    },
    {
      title: "Higher Secondary - PCM with Computer Science",
      subTitle: "New Prince Shree Bhavani School (2019 - 2021)",
      result: "7.7/10",
      des: "Built foundation in science and computer applications for higher education.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className="w-full"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-1">
        <p className="text-sm text-designColor tracking-[4px] uppercase">2019 - 2025</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
      </div>
      <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 pl-4">
        {educationItems.map((item, i) => (
          <ResumeCard key={i} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Education;


// import React from "react";
// import { motion } from "framer-motion";
// import ResumeCard from "./ResumeCard";

// const Education = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
//     >
//       {/* part one */}
//       <div>
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="B.Tech Computer Science and Engineering"
//             subTitle="BSA Crescent Institute of Science and Technology (2021 - 2025)"
//             result="9.38/10"
//             des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
//           />
//           <ResumeCard
//             title="High Secondary School Education - PCM with Computer Science"
//             subTitle="New Prince Shree Bhavani Secior Secondary School (2019 - 2021)"
//             result="7.7/10"
//             des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
//           />
//         </div>
//       </div>
//       {/* part Two */}

//       {/* <div>
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Sr. Software Engineer"
//             subTitle="Google Out Tech - (2017 - Present)"
//             result="USA"
//             des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
//           />
//           <ResumeCard
//             title="Web Developer & Trainer"
//             subTitle="Apple Developer Team - (2012 - 2016)"
//             result="MALAYSIA"
//             des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
//           />
//           <ResumeCard
//             title="Front-end Developer"
//             subTitle="Nike - (2020 - 2011)"
//             result="Oman"
//             des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
//           />
//         </div>
//       </div> */}
//     </motion.div>
//   );
// };

// export default Education;
