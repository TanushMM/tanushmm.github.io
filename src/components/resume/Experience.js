import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Sep 2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
          title="Data Analyst - Internship"
          subTitle="Intervie Tech Pvt. Ltd. - (June 2024 - July 2024)"
          result="Patiala, Punjab, India [Remote]"
          des="I have completed an internship as a Data Analyst at Intervie Tech. During this internship, I led a team in the completion of a data science project addressing present-day Human Resource concerns. I utilized Python, Pandas, and Scikit-Learn to conduct data analysis and create visualizations. Additionally, I coordinated tasks and managed project timelines to ensure successful project delivery, all while enhancing my professional skills in data science through hands-on experience and collaboration."
          />


          <ResumeCard
          title="Data Science Internship"
          subTitle="Cognifyz Technologies - (September 2023 - October 2023)"
          result="Chennai, Tamil Nadu, India [Remote]"
          des="During my internship at Cognifyz Technologies, I gained valuable experience in applying data analysis and problem-solving skills to real-world scenarios. I utilized advanced data analysis techniques to extract actionable insights from restaurant datasets. This internship significantly contributed to enhancing my proficiency in solving practical problems using data-driven methodologies."
          />

          {/* <ResumeCard
            title="Data Science Internship - Current Position"
            subTitle="Unified Mentor Private Limited - (June 2024 - September 2024)"
            result="Gurugram, Haryana, India [Remote]"
            des="I am currently interning as a Data Science Intern at Unified Mentor Private Limited. During this internship, I have been gaining practical experience in applying data analysis techniques and problem-solving skills to real-world projects. Specifically, I have utilized my data analysis skills to derive valuable insights from restaurant datasets. This hands-on experience has significantly enhanced my ability to tackle real-world challenges using data-driven approaches."
            /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
