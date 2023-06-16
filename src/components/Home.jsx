import React from 'react'
import second from "../assets/tauseefcrop.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"

const Home = () => {
    return (
        <div className='mx-auto h-screen w-full bg-gradient-to-b from-slate-800 via bg-green-700 to-slate-600' name="home" >
            <div className='flex max-w-screen-lg mx-auto h-screen flex-col pt-5 justify-center items-center px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full text-white '>
                    <h2 className='text-4xl  sm:text-5xl  font-bold'> I am a Mern Stack Developer</h2>
                    <p className=" py-6 max-w-md text-slate-300"> I have 7 month of experience as mern Stack developer i have build and design number of websites i am mern stack developer built  websites using technologie
                        like Reactjs,bookstrap, CSS,Material UI,TailwindCSS, MongoDB
                    </p>

                    <div>
                        <Link to='Portfolio' smooth={true} duration={500} className=' group px-6 py-3 my-2 w-32 bg-emerald-950 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg text-white'>Portfolio <span className='group-hover:rotate-90 duration-500 ml-1'> <MdOutlineKeyboardArrowRight size={25} /></span> </Link>
                    </div>
                </div>
                <div>
                    <img src={second} className='rounded-lg  mx-auto w-2/3 md:w-full' />
                </div>

            </div>
        </div>
    )
}

export default Home
