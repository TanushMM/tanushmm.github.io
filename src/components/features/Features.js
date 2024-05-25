import React from 'react'
// import { AiFillAppstore } from "react-icons/ai";
// import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiVisualstudiocode, SiGithub, SiLeetcode, SiMysql, SiJava, SiPython } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="Expertise" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Data Structures and Algorithms"
          des="Skilled in core DS and algorithms. Strong understanding of time/space complexity."
          link="https://leetcode.com/TanushMM"
          icon={<SiLeetcode />}
        />
        <Card
          title="Structured Query Language - MySQL"
          des="Unlock data insights through adept querying for various database systems."
          icon={<SiMysql />}
        />
        <Card
          title="Microsoft Visual Studio Code"
          des="Leverage VS Code's features for efficient 
          code editing, debugging, and workflow optimization."
          icon={<SiVisualstudiocode />}
        />
        <Card
          title="GitHub - Version Control"
          des="Utilize Git for version control and collaboration. 
          Manage projects effectively on GitHub."
          link="https://github.com/TanushMM"
          icon={<SiGithub />}
        />
        <Card
          title="Java"
          des="Implement efficient algorithms and 
          data structures (arrays, linked lists, Binary Tree, etc.) in Java."
          link="https://github.com/TanushMM/java_learning"
          icon={<SiJava />}
        />
        <Card
          title="Python"
          des=" Skilled in utilizing Python libraries (NumPy, Pandas, etc.) 
          for data analysis, manipulation, and machine learning model development."
          icon={<SiPython />}
        />
      </div>
    </section>
  );
}

export default Features