import React from 'react'
import { GitIcon } from './GitIcon'
import { LinkedinIcon } from './LinkedinIcon'

export const Navbar = () => {
    return (
        <div className='flex justify-between py-10 container'>
            <h1 className="text-2xl font-bold text-white flex-1">
                Camila Rivas
            </h1>
            <div className='text-white  flex justify-end items-end  gap-5  bg-zinc-800 bg-opacity-70 rounded-full px-10 py-5'>
                <GitIcon />
                <LinkedinIcon />
            </div>
        </div>
    )
}
