import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Best Manoeuvrable Vehicle Award"
            subTitle="SAE India Southern Section - Dr. G. Padmanabham Memorial Electric
            Two Wheeler Design Competition"
            result="2022"
            des="Was part of a team recognized for designing an electric 
            two-wheeler with exceptional maneuverability. 
            This competition experience honed my teamwork and problem-solving skills."
          />
          <ResumeCard
            title="250+ Data Structures and Algorithm Question Solved"
            subTitle="Leetcode"
            result="January 2024 - Present"
            des="Sharpened problem-solving skills by tackling over 
            250 Data Structures and Algorithms challenges on LeetCode."
          />
          {/* <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Business English Certificate - Preliminary"
            subTitle="Cambridge - London"
            result="Septemer 2023"
            des="Strong foundation in business English, London-tested (BEC Preliminary)."
          />
          <ResumeCard
            title="Microsoft Azure Data Fundamentals"
            subTitle="Microsoft"
            result="September 2022"
            des="Possess a strong foundation in cloud data concepts, verified by Microsoft. 
            This certification equips me to design and implement 
            data solutions leveraging Azure services."
          />
          <ResumeCard
            title="Statistics"
            subTitle="365 Data Science"
            result="November 2022"
            des="Strengthened my statistical foundation for data analysis, 
            applying concepts through practical exercises."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
