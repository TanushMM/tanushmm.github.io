import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaMicrosoft } from "react-icons/fa";
import { SiJava, SiPandas, SiPython, SiMicrosoftexcel, SiLeetcode} from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Forward Looking Finance Enthusiast.", "Data Scientist.", "Financial Geek."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
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
        Results-Driven and foreward looking Computer Science Student and a fresher 
        in the field of data science with tech skills: Python, Excel, Power BI, Statistics. 
        I love to read books and i have started solving DSA questions to enhance 
        my technical and problem solving skills.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {/* <span className="bannerIcon">
              <FaFacebookF />
            </span> */}
            <span className="bannerIcon">
              <a href="https://twitter.com/tanushmm2004" target="_blank"><FaTwitter /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/tanush-mm/" target="_blank"><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://learn.microsoft.com/en-us/users/tanushmm/" target="_blank"><FaMicrosoft /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://leetcode.com/u/TanushMM/" target="_blank"><SiLeetcode /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank"><SiJava /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://en.wikipedia.org/wiki/Microsoft_Excel" target="_blank"><SiMicrosoftexcel /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.python.org/" target="_blank"><SiPython /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://pypi.org/project/pandas/" target="_blank"><SiPandas /></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner