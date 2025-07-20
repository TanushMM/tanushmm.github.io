"use client"
import { useRef } from "react"
import Title from "../layouts/Title"

export const Timeline = ({ data }) => {
  const ref = useRef(null)
  const containerRef = useRef(null)

  return (
    <section
      id="experience"
      className="w-full py-20 border-b border-b-black"
      ref={containerRef}
    >
      <Title title="Experience" des="My Work Experience" />

      <div ref={ref} className="relative mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 md:gap-10 py-10"
          >
            {/* Timeline Point and Title/Job/Date */}
            <div className="relative flex-shrink-0 md:w-[250px]">
              <div className="hidden md:flex flex-col gap-2 text-left pl-8 font-titleFont">
                <h3 className="text-xl font-semibold text-neutral-300">
                  {item.title}
                </h3>
                <h4 className="text-lg text-neutral-400">{item.job}</h4>
                <h5 className="text-sm text-neutral-500">{item.date}</h5>
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden mb-2 font-titleFont">
              <h3 className="text-lg font-semibold text-neutral-300">
                {item.title}
              </h3>
              <h4 className="text-base text-neutral-400">{item.job}</h4>
              <h5 className="text-sm text-neutral-500">{item.date}</h5>
            </div>

            {/* Timeline Content */}
            <div className="w-full md:pl-4 font-bodyFont">
              {item.contents.map((content, i) => (
                <p
                  key={i}
                  className="text-sm md:text-base text-neutral-400 mb-3"
                >
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
