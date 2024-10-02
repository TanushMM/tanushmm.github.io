import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaMicrosoft, FaMediumM } from "react-icons/fa";
import { SiJava, SiPython, SiLeetcode, SiDocker, SiAmazonaws } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Data Science Enthusiast.", "Cloud and DevOps Enthusiast.", "Finance and Stock Market Enthusiast."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Tanush Modem Mahesh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A forward-thinking Computer Science student with a strong focus on backend development
          (Flask, Express [Learning]), API design, and DevOps practices. Proficient in AWS,
          Python for data science, and Java for algorithmic problem-solving (DSA). Continuously
          refining my technical expertise through hands-on projects and DSA challenges. An avid
          reader with interests in personal finance and technology.
        </p>

      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/tanush-mm/" target="_blank"><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://medium.com/@tanushmmofficial" target="_blank"><FaMediumM /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://learn.microsoft.com/en-us/users/tanushmm/" target="_blank"><FaMicrosoft /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://leetcode.com/u/TanushMM/" target="_blank"><SiLeetcode /></a>
            </span>
            {/* <span className="bannerIcon">
              <a href="https://twitter.com/tanushmm2004" target="_blank"><FaTwitter /></a>
            </span> */}
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.python.org/" target="_blank"><SiPython /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.docker.com/" target="_blank"><SiDocker /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://aws.amazon.com/" target="_blank"><SiAmazonaws /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank"><SiJava /></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner