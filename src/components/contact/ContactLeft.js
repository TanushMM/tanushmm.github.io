import { FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full  h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Tanush Modem Mahesh</h3>
        <p className="text-lg font-normal text-gray-400">
          Data Scientist
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Backend-focused engineer passionate about scalable architectures, system design, and infrastructure. I enjoy building reliable systems with queues, brokers, caching, and automation. Also interested in algo trading, personal finance, and code quality.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">tanushmmofficial@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/tanush-mm/" target="_blank"><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft