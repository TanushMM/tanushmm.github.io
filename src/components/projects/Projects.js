import React from 'react';
import Title from '../layouts/Title';
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from '../../assets';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b border-b-black">
      {/* Title */}
      <div className="text-left mb-10">
        <Title title="VISIT MY PORTFOLIO" des="My Projects" />
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Full Width Rideshare */}
        <div className="grid grid-cols-1">
          <ProjectsCard
            title="RIDESHARE APPLICATION [AWS EC2, S3, FLASK, DOCKER]"
            des="Developed a fully functional RideShare application with real-time ride matching, secure authentication, and dynamic route optimization. The app is containerized with Docker and deployed on AWS EC2, leveraging S3 for static asset storage."
            src={projectSix}
            link="https://github.com/TanushMM/application_share"
            link2="/rideshare"
          />
        </div>

        {/* 2-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectsCard
            title="PREDICTIVE MODEL OF HOUSE PRICES AND DEPLOYMENT ON AWS [ELASTIC BEANSTALK, CODEPIPELINE]"
            des="Deployed a house price prediction model using a comprehensive data science pipeline and Flask application, fully integrated with AWS for scalability."
            src={projectFour}
            link="https://github.com/TanushMM/Predictive_Modelling_of_House_Prices_Using_Python_and_Flask"
            link2="/houseprice"
          />
          <ProjectsCard
            title="TODO LIST USING FLASK - CONTAINERIZED USING DOCKER"
            des="Designed and containerized a Flask-based to-do list app using Docker for simplified deployment and modular scaling."
            src={projectFive}
            link="https://github.com/TanushMM/Dockerized_ToDoList_Python.git"
            link2="/todolist"
          />
          <ProjectsCard
            title="LINEAR REGRESSION PAIRS TRADING SYSTEM"
            des="Built a system using linear regression and APIs to identify trading opportunities. Automated data extraction (JSON to CSV) streamlined ML processing."
            src={projectOne}
            link="https://github.com/TanushMM/Linear_Regression_Pairs_Trading_System_Flask"
            link2="/linearregression"
          />
          <ProjectsCard
            title="DIGIT RECOGNIZER USING CONVOLUTION NEURAL NETWORK"
            des="Handwritten digit recognition using CNNs and MNIST dataset, achieving high accuracy for practical OCR applications."
            src={projectTwo}
            link="https://github.com/TanushMM/Digit-Recognition-Using-Convolution-Neural-Network"
            link2="/digitrecognizer"
          />
          <ProjectsCard
            title="DATA PREPROCESSING AND DIMENSIONALITY REDUCTION USING PCA"
            des="Vehicle dataset analysis using PCA and linear regression to explore dimensionality reduction and model performance."
            src={projectThree}
            link="https://github.com/TanushMM/Data-Preprocessing-And-Dimensionality-Reduction-Using-PCA"
            link2="/pca"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;