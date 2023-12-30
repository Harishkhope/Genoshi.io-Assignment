import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Graphs from './Graphs'
import Subscribe from './Subscribe'

const Hero = () => {
    return (
        <div key="1" className="bg-[#0c0e16] min-h-screen text-white  font-inter ">
            <Navbar />
            <header className="text-center pb-16 md:pb-20 max-w-6xl mx-auto px-4 sm:px-6 max-h-screen">
                <h1 className="mx-4 md:mx-20 text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tighter tracking-tighter mb-4 md:mb-8">
                    Read cutting-edge research, <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 '>no matter who you are.</span>
                </h1>
                <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-400">
                    Dive deep into research with AI-powered summaries, interactive queries, and a revolutionary knowledge graph
                    structure, overhauling your understanding of complex topics.
                </p>
            </header>

            <div className="container mx-auto px-4 py-6 flex justify-center space-x-4">
                <div className="text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4">
                    Try it out
                </div>
                <div className="text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4">
                    Create custom graph
                    <div className=" p-2 rounded-md">
                        <ArrowRightIcon className="text-white" />
                    </div>
                </div>
            </div>
            <Services />
            <Graphs />
            <Subscribe />
        </div>
    )
}
function ArrowRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}




export default Hero
