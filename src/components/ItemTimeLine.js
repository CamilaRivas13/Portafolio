import React from 'react'

export const ItemTimeLine = ({time,title,desc}) => {
  return (
<li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1  font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{desc}</p>

          </li>
  )
}
