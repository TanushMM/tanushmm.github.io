import React from 'react'
import { SiVisualstudiocode, SiGithub, SiLeetcode, SiPostgresql, SiJava, SiPython, SiAmazonaws, SiDocker, SiMongodb } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Expertise = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="Expertise" />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-10">

        <Card
          title="Python"
          icon={<SiPython />}
        />
        <Card
          title="Java"
          icon={<SiJava />}
        />
        <Card
          title="Docker - Containerization"
          icon={<SiDocker />}
        />
        <Card
          title="Amazon Web Services"
          icon={<SiAmazonaws />}
        />
        <Card
          title="MongoDB - NoSQL Database"
          icon={<SiMongodb />}
        />
        <Card
          title="PostgreSQL - SQL Database"
          icon={<SiPostgresql />}
        />
        <Card
          title="GitHub - Version Control"
          icon={<SiGithub />}
        />
        <Card
          title="Data Structures and Algorithms"
          icon={<SiLeetcode />}
        />
        {/* <Card
          title="Microsoft Visual Studio Code"
          icon={<SiVisualstudiocode />}
        /> */}
      </div>
    </section>
  );
}

export default Expertise