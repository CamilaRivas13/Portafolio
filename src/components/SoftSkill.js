import React from 'react'

export const SoftSkill = ({skill,desc}) => {
  return (
    <div className=" bg-[#323232]  rounded-xl p-5 container">
          <h1 className=" text-3xl md:text-5xl   font-bold text-white un">
            {skill}
          </h1>
          <p className="text-gray-400 font-thin text-xl py-5 max-w-xl">
            {desc}
          </p>
        </div>
  )
}
