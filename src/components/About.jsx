import React from 'react'

const data = [

    { id: 1, skill: "Developing and designing front end web architecture" },
    { id: 2, skill: "Building interactive consumer data from multiple systems" },
    { id: 3, skill: "Define code architecture decisions to support high- performance products" },
    { id: 4, skill: "Translate and Designs functional web applications" },
    { id: 5, skill: "Work with development teams and managers to ideate software solutions" },
    { id: 6, skill: 'Conduct and participate in project planning & scheduling and design discussions' },
    { id: 7, skill: "Address and improve any technical issues" }

]

const About = () => {
    return (

        <div className='px-4 w-full h-screen  bg-gradient-to-b from-slate-600 via bg-green-700 to-slate-900  pb-6' name="About">
            <div className='max-w-screen-lg mx-auto flex  flex-col justify-center h-full pt-5 '>
                <div className='pb-8'>
                    <h1 className='text-slate-300 text-4xl  font-bold inline border-b-4 border-gray-300'> About</h1>
                </div>
                <p className="text-xl text-slate-300 mt-6"> i have completed bootcamp as mernstack developer  and also completed 2 month internship with BitSol Technologies, If i talk about my experties, I Can Build interactive consumer data from multiple systems and RESTfully abstract to the UI through a Node.js backend</p> <br />
                <ul className='text-xl  text-slate-300'>
                    {data.map(({ id, skill }, ind) => (
                        <li key={id} className='text-xl'>{skill}</li>
                    ))

                    }
                </ul>
            </div>
        </div>

    )
}

export default About
