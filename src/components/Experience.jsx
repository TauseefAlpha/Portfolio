import React from 'react'
import html from "../assets/html.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import Typescript from "../assets/typescript.png"
import nestjs from "../assets/nestjs.png"
import tailwind from "../assets/tailwind.png"
import mongodb from "../assets/mongodb.png"
import Vite from "../assets/vite.png"
import scss from "../assets/saas.png"
import github from "../assets/github.png"
import nodejs from "../assets/node.png"


const data = [
    {
        id: 1,
        img: html,
        title: "HTML",
        styling: "shadow-orange-500"


    },
    {
        id: 2,
        img: css,
        title: "CSS",
        styling: "shadow-blue-500"


    },

    {
        id: 3,
        img: tailwind,
        title: "Tailwindcss",
        styling: "shadow-sky-400"


    },
    {
        id: 4,
        img: scss,
        title: "SCSS",
        styling: "shadow-pink-600"


    },
    {
        id: 5,
        img: js,
        title: "JavaScript",
        styling: "shadow-yellow-500"


    },
    {
        id: 6,
        img: Typescript,
        title: "Typescript",
        styling: "shadow-blue-400"


    },
    {
        id: 7,
        img: react,
        title: "React",
        styling: "shadow-blue-600"


    },
    {
        id: 8,
        img: Vite,
        title: "VITE",
        styling: "shadow-purple-500"


    },
  
    {
        id: 9,
        img: nestjs,
        title: "Nestjs",
        styling: "shadow-red-700"


    },
    {
        id: 10,
        img: nodejs,
        title: "Nodejs",
        styling: "shadow-green-700"


    },
    {
        id: 11,
        img: mongodb,
        title: "MongoDB",
        styling: "shadow-green-500"


    },
    {
        id: 12,
        img: github,
        title: "GitHub",
        styling: "shadow-gray-500"


    },



]


const Experience = () => {
    return (
        <div className='px-4 w-full h-full bg-gradient-to-b  from-slate-500 to-slate-900' name="Experience">
            <div className='max-w-screen-lg mx-auto flex  flex-col justify-center w-full h-full'>
                <div className='my-6'>
                    <p className='text-4xl font-bold text-slate-100 border-b-4 border-slate-400 inline'>Experience</p>
                    <p className='text-2xl font-bold text-slate-100 my-2'>Technologies I have worked with</p>
                </div>
                <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 mt-4 gap-8 px-12 sm:px-0'>
                    {data.map(({ id, img, title, styling }, ind) => (
                        <div key={id} className={`shadow-lg text-center hover:scale-110 duration-500 py-2 rounded-lg ${styling}`}>
                            <img src={img} alt='' className='w-40 mx-auto' />
                            <p className='text-2xl text-yellow-50'>{title}</p>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Experience
