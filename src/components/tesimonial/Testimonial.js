import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import { testimonialOne, quote } from "../../assets";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="w-10 h-10 bg-[#1e1e1e] hover:bg-designColor transition duration-300 rounded-full flex justify-center items-center absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 cursor-pointer text-white shadow-lg"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="w-10 h-10 bg-[#1e1e1e] hover:bg-designColor transition duration-300 rounded-full flex justify-center items-center absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 cursor-pointer text-white shadow-lg"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => setDotActive(next),
    appendDots: (dots) => (
      <div className="pt-6">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full ${i === dotActive ? "bg-designColor" : "bg-gray-500"} cursor-pointer`}
      />
    ),
  };

  return (
    <section id="testimonial" className="w-full py-20 border-b border-b-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10"> {/** text-left */}
          <Title title="WHAT PEOPLE SAY" des="Testimonial" />
        </div>

        <Slider {...settings}>
          <div className="w-full">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1e2024] to-[#2b2f33] p-6 md:p-10 rounded-xl shadow-lg flex flex-col lg:flex-row gap-8 items-center lg:items-start"> {/** max-w-screen-lg */}
              {/* Left Column: Image & Info */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[30%] gap-4">
                <img
                  src={testimonialOne}
                  alt="testimonial"
                  className="w-32 h-32 lg:w-36 lg:h-36 object-cover rounded-full border-4 border-designColor shadow-md"
                />
                <div>
                  <p className="text-sm uppercase text-designColor">Chennai, India</p>
                  <h3 className="text-xl font-semibold text-white mt-2">
                    Gouri Shankar Prusty P
                  </h3>
                  <p className="text-sm text-gray-400">Friend of Tanush</p>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-[70%] flex flex-col justify-start">
                <img src={quote} alt="quote" className="w-8 h-8 opacity-60 mb-2" />

                <div className="border-l-4 border-designColor pl-4 py-2">
                  <h4 className="text-lg lg:text-xl font-semibold text-white">
                    Critical thinker, great humour, good friend
                  </h4>
                  <p className="text-sm text-gray-400">21st March 2024</p>
                </div>

                <div className="text-yellow-400 flex mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <RiStarFill key={i} />
                  ))}
                </div>

                <p className="text-gray-300 text-sm lg:text-base mt-4 leading-relaxed tracking-wide">
                  Tanush isn't just a colleague I respect—he's one of my closest friends from college, and we've known each other for over 4 years now. From day one, I saw a spark in his curiosity, especially around Finance and Data Science, and that passion has only grown stronger with time. His commitment to continuous learning—whether it's mastering advanced machine learning models or diving deep into financial analytics—is inspiring...
                </p>

                <p className="text-gray-400 mt-4 font-medium">
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/gouri-shankar-prusty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-designColor hover:underline"
                  >
                    gouri-shankar-prusty
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;