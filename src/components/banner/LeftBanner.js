import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaMicrosoft, FaMediumM } from "react-icons/fa";
import { SiJava, SiPython, SiLeetcode, SiDocker, SiAmazonaws } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Backend Engineer.", "Agentic AI Architect.", "Finance Enthusiast."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Tanush</span>
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
          I'm a backend-focused software engineer passionate about scalable systems, distributed architectures, and cloud infrastructure. I enjoy building resilient, well-structured services that support long-term maintainability and performance.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Outside of tech, I explore quantitative trading systems, algorithmic strategies, and personal finance automation. I also enjoy traveling and discovering new places—experiencing different cultures and environments inspires me.
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