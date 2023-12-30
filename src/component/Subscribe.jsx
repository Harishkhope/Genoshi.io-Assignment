import React from 'react'

const Subscribe = () => {
    return (
        <div key="1" className="  text-white ">
            <div className=" max-w-6xl mx-auto  sm:px-6 container relative bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg py-5 px-8 md:py-8 md:px-12 shadow-2xl overflow-hidden ">

                <div className="w-1/2 space-y-6 text-black" >
                    <h1 className="text-5xl font-bold">Stay updated with Graff!</h1>
                    <p className="text-xl">
                        Sign up for our newsletter, and you'll be the first to know about our closed beta test!
                    </p>
                    <div className="flex space-x-4">
                        <input className="flex-1 p-2 rounded-md" placeholder="Your email..." />
                        <div className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white ">Subscribe</div>
                    </div>
                    <p className="text-sm text-gray-400">(No spam, I promise. You can unsubscribe at any time.)</p>
                </div>
                <div className=" absolute right-0 bottom-0 ">
                    <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a"><stop stop-color="#DFDFDF" offset="0%"></stop><stop stop-color="#4C4C4C" offset="44.317%"></stop><stop stop-color="#333" offset="100%"></stop></radialGradient></defs><g fill="none" fill-rule="evenodd"><g fill="#000"><ellipse fill-opacity=".04" cx="185" cy="15.576" rx="16" ry="15.576"></ellipse><ellipse fill-opacity=".24" cx="100" cy="68.402" rx="24" ry="23.364"></ellipse><ellipse fill-opacity=".12" cx="29" cy="251.231" rx="29" ry="28.231"></ellipse><ellipse fill-opacity=".64" cx="29" cy="251.231" rx="8" ry="7.788"></ellipse><ellipse fill-opacity=".12" cx="342" cy="31.303" rx="8" ry="7.788"></ellipse><ellipse fill-opacity=".48" cx="62" cy="126.811" rx="2" ry="1.947"></ellipse><ellipse fill-opacity=".12" cx="78" cy="7.072" rx="2" ry="1.947"></ellipse><ellipse fill-opacity=".64" cx="185" cy="15.576" rx="6" ry="5.841"></ellipse></g><circle fill="url(#ni-a)" cx="276" cy="237" r="200"></circle></g></svg>
                </div>

            </div>
            <footer className="bg-[#111111] py-6 relative">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center border-t border-gray-700 pt-6">
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <h2 className="font-bold text-lg mb-4">Products</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <div className="text-gray-400 hover:text-gray-300" to="#">
                                            Graff
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg mb-4">Company</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <div className="text-gray-400 hover:text-gray-300" to="#">
                                            Home
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-gray-400 hover:text-gray-300" to="#">
                                            About us
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-gray-400 hover:text-gray-300" to="#">
                                            Pricing
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg mb-4">Subscribe</h2>
                                <div className=" flex space-x-2">
                                    <input className="flex-1 p-2 rounded-md" placeholder="Your email" />
                                    <div className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md">
                                        <ArrowRightIcon className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div />
                    </div>
                </div>
                <div className="absolute bottom-2  w-full h-[1px] bg-white" />
            </footer>
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
export default Subscribe