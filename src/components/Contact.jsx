import React from 'react'

const Contact = () => {
    return (
        <div className=' px-4 pt-10 flex flex-col w-full h-full bg-gradient-to-b  from-slate-900 to-slate-600 md:pt-5' name="Contact">
            <div className='flex flex-col max-w-screen-lg mx-auto w-screen h-screen pt-5'>
                <div className='my-8'>
                    <p className="text-4xl text-slate-200 border-b-4 border-slate-300 inline font-bold">Contact</p>
                    <p className="text-2xl text-slate-200  mt-3">Submit the form below to contact with me</p>
                </div>

                <div className='border-slate-600   md:shadow-lg shadow-slate-400 md: border-4 p-5 flex justify-center items-center '>

                    <form action="https://getform.io/f/982b0458-6143-4b75-b019-15ca6e5ef079" method='POST' className='flex flex-col  h-full md:w-1/2'>

                        <input placeholder='enter your name' name="name" className='  mx-2 px-4 py-3 my-2 rounded-md  border-2 text-slate-950  focus:outline-none' type='text' />
                        <input placeholder='enter your email' name="email" className='mx-2 px-4 py-3 my-2 rounded-md  border-2  text-slate-950 focus:outline-none ' type='email' />
                        <textarea name='message' rows="8" className='mx-2 px-4 py-3 my-2rounded-md ' placeholder='enter your message' ></textarea>
                        <button className='px-6 py-3 mt-5 border-r-indigo-400  rounded-md bg-slate-950 text-slate-100 text-lg hover:scale-105 duration-500' >Let Talk</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
