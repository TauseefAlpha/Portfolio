// import { useState } from 'react'

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const listitem = [
    {
        id: 1,
        name: 'home'
    },
    {
        id: 2,
        name: 'About'
    },
    {
        id: 3,
        name: 'Portfolio'
    },
    {
        id: 4,
        name: 'Experience'
    },
    {
        id: 5,
        name: 'Contact'
    }
]
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <>
            <div className='flex  bg-slate-950 justify-between py-3 px-4 align-middle w-full'>
                <div className='text-5xl font-bold font-signature text-white '>
                    Tauseef
                </div>

                <ul className='space-x-8 pt-1 hidden md:flex'>
                    {listitem.map(({ id, name }) => (
                        <li key={id} className='text-lg cursor-pointer text-gray-500 capitalize  '><Link to={name} smooth={true} duration={500} className=" hover:bg-slate-600">{name}</Link></li>
                    ))}
                </ul>

                <div className="cursor-pointer pr-2 z-10  md:hidden" onClick={() => setNav(!nav)}>
                    {nav ? <FaTimes className="text-white" onClick={() => setNav(false)} size={30} /> : <FaBars className="text-white" onClick={() => setNav(true)} size={30} />}
                </div>

            </div>


            {nav && <ul className='flex  bg-slate-950 flex-col text-center py-8 md:hidden '>
                {listitem.map(({ id, name }) => (
                    <li key={id} className='text-3xl  py-2 text-gray-500 capitalize cursor-pointer' onClick={() => setNav(false)} ><Link to={name} smooth={true} duration={500}>{name}</Link></li>
                ))}
            </ul>}
        </>

    )
}

export default Navbar
