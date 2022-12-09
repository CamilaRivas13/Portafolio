import React from 'react'

export const TechExperience = ({tech,experience}) => {
  return (
    <div className="bg-zinc-900 rounded-xl p-5">
          <h1 className="text-5xl md:text-7xl   font-bold text-white">
            {tech}
          </h1>
          <p className="text-gray-400 font-thin text-xl py-5 max-w-xl">
            {experience}
          </p>
        </div>
  )
}
