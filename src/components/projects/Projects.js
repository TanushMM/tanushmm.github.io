import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:gap-14">
      <ProjectsCard
          title="LINEAR REGRESSION PAIRS TRADING SYSTEM"
          des="Built a system using linear regression and APIs to identify 
          trading opportunities. Automated data extraction (JSON to CSV) 
          streamlined ML processing."
          src={projectOne}
          link="https://github.com/TanushMM/Linear_Regression_Pairs_Trading_System"
          link2={"/linearregression"}
        />
      </div>
      <br></br>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="DIGIT RECOGNIZER USING CONVOLUTION NEURAL NETWORK"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          link="https://github.com/TanushMM/Digit-Recognition-Using-Convolution-Neural-Network"
          link2={"/digitrecognizer"}
        />
        <ProjectsCard
          title="DATA PREPROCESSING AND DIMENSIONALITY REDUCTION USING PCA"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          link="https://github.com/TanushMM/Data-Preprocessing-And-Dimensionality-Reduction-Using-PCA"
          link2={"/pca"}
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
      </div>
    </section>
  );
}

export default Projects