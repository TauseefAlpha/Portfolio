import React from 'react'
import TA from "../assets/portfolio/TA.png"
import netflix from "../assets/portfolio/netflix.png"
import Gamedev from "../assets/portfolio/gamedev.png"
import clock from "../assets/portfolio/clock.png"
import cartmanagement from "../assets/portfolio/cartmanagement.png"
import odersummary from "../assets/portfolio/odersummary.png"
import resturant from "../assets/portfolio/resturant2.png"

const data = [


    {
        id: 1,
        image: netflix,
        demo: "https://netflix-psi-seven.vercel.app/",
        code: 'https://github.com/TauseefAlpha/netflixApp'
    },
    {
        id: 2,
        image: Gamedev,
        demo: "https://gamedev-tau.vercel.app/",
        code: 'https://github.com/TauseefAlpha/Gamedev'
    },
    {
        id: 3,
        image: TA,
        demo: "https://ta-moviexweb.vercel.app",
        code: 'https://github.com/TauseefAlpha/TA-moviexweb'
    },

    {
        id: 4,
        image: cartmanagement,
        demo: "https://store-cartmanagement.vercel.app/",
        code: 'https://github.com/TauseefAlpha/store-cartmanagement'
    },
    {
        id: 5,
        image: clock,
        demo: "https://clock-dial.netlify.app/",
        code: 'https://github.com/TauseefAlpha/clock'
    },

    {
        id: 6,
        image: resturant,
        demo: "https://restruantweb.vercel.app/",
        code: 'https://github.com/TauseefAlpha/restruantweb'
    },
    {
        id: 7,
        image: odersummary,
        demo: "https://github.com/TauseefAlpha/eshoppingwatchstore",
        code: 'https://github.com/TauseefAlpha/eshoppingwatchstore'
    },

]


const Portfolio = () => {



    return (

        <div className='px-4 pt-10  w-full   bg-gradient-to-b  from-slate-900 via bg-green-700 to-slate-500' name="Portfolio">
            <div className='max-w-screen-lg mx-auto flex  flex-col justify-center h-full'>
                <div className='pb-8 pt-8'>
                    <p className='text-slate-300 text-4xl font-bold inline border-b-4 border-gray-300'> PortFolio</p>
                    <p className='text-slate-300 text-2xl  font-bold  py-4'> check out my some project right here demo</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3  flex-col gap-6 px-12 sm:px-0'>
                    {data?.map(({ id, image, demo, code }) => (
                        <div key={id} className='shadow-md shadow-slate-900 rounded-lg duration-300 hover:scale-105'>
                            <img src={image} alt="netflix" className='rounded-lg' />
                            <div className='flex justify-around py-4'>
                                <button className='px-3 py3 mx-2 text-lg text-yellow-100 items-center hover:scale-125  duration-300'><a href={code} target='blank'>Code</a></button>
                                <button className=' px-3 py3 mx-2 items-center  text-yellow-100 hover:scale-125  duration-300' > <a href={demo} target='blank'>Demo</a></button>
                            </div>
                        </div>

                    ))

                    }


                </div>
            </div>
        </div>
    )
}

export default Portfolio
