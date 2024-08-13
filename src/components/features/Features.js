import React from 'react'
import { SiVisualstudiocode, SiGithub, SiLeetcode, SiMysql, SiJava, SiPython, SiAmazonaws, SiDocker } from "react-icons/si";
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
          title="Python"
          des="Skilled in utilizing Python libraries (NumPy, Pandas, etc.) 
          for data analysis, manipulation, and machine learning model development."
          icon={<SiPython />}
        />
        <Card
          title="Docker - Containerization"
          des="Proficient in using Docker for containerizing 
          applications, streamlining development workflows, and enhancing deployment consistency."
          icon={<SiDocker />}
        />
        <Card
          title="Amazon Web Services [S3, EC2, Elastic Beanstalk, ECR, ECS, CodePipelines]"
          des="Skilled in leveraging AWS services for scalable cloud solutions. 
          Experienced with S3 for object storage, EC2 for compute resources, 
          Elastic Beanstalk for application deployment, ECR for container registry management, 
          ECS for container orchestration, and CodePipeline for continuous integration and delivery."
          icon={<SiAmazonaws />}
        />
        <Card
          title="Java"
          des="Implement efficient algorithms and 
          data structures (arrays, linked lists, Binary Tree, etc.) in Java."
          link="https://github.com/TanushMM/java_learning"
          icon={<SiJava />}
        />
        <Card
          title="Structured Query Language - MySQL, PostgreSQL"
          des="Unlock data insights through adept querying for various database systems."
          icon={<SiMysql />}
        />
        <Card
          title="Data Structures and Algorithms"
          des="Skilled in core DS and algorithms. Strong understanding of time/space complexity."
          link="https://leetcode.com/TanushMM"
          icon={<SiLeetcode />}
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
      </div>
    </section>
  );
}

export default Features