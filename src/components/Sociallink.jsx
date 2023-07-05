import React from 'react'
import { FiGithub } from "react-icons/fi"
import { FaLinkedin } from "react-icons/fa"
import { MdOutlineMailLock } from "react-icons/md"
import { BsFillFilePersonFill } from "react-icons/bs"


const data = [
    { id: 1, name: "Linkdin", icon: <FaLinkedin size={30} />, href: "https://www.linkedin.com/in/tauseef-ahmad-a2107523b/" },
    { id: 2, name: "Github", icon: <FiGithub size={30} />, href: "https://github.com/TauseefAlpha" },
    { id: 3, name: "Mail", icon: <MdOutlineMailLock size={30} />, href: "mailto:name@email.com" },
    { id: 4, name: "Profile Cv", icon: <BsFillFilePersonFill size={30} />, href: "./mernstack cv.pdf", download: true }
]



const Sociallink = () => {
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
            <ul className='space-y-6' >
                {
                    data.map(({ id, name, icon, href, download }, ind) => (
                        <li className='flex justify-between items-center w-40 px-4  py-2 ml-[-100px] hover:ml-[-10px] hover:rounded-r-lg duration-500 bg-gray-800  ' key={id}>
                            <a className="flex justify-between text-white items-center w-full" href={href} download={download} target='blank' rel='noreferrer'>{name}{icon}</a>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Sociallink
