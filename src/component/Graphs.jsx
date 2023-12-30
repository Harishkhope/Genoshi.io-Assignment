import React from 'react'

const Graphs = () => {
    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen p-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0 lg:space-x-24">
                <div className="lg:w-1/2">
                    <div className="w-full h-[300px] lg:h-[400px]" />
                </div>
                <div className="lg:w-1/2 space-y-12">
                    <div>
                        <h1 className="text-4xl font-bold">Innovative knowledge graphs</h1>
                        <p className="mt-4 text-lg">
                            Our innovative knowledge graphs allow you to efficiently gain insights and extract information from
                            research papers. Whether you're conducting interdisciplinary research or focusing on a specific field, our
                            tool will revolutionize the way you work.
                        </p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-xl">
                        <h2 className="text-2xl font-semibold">Interactive exploration</h2>
                        <p className="mt-4 text-lg">
                            Our interactive knowledge graphs allow you to explore the connections between different concepts in a
                            research paper in a visual and intuitive way. This feature enhances your understanding and makes your
                            research process more engaging.
                        </p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-xl">
                        <h2 className="text-2xl font-semibold">Custom Graphs from Your PDFs</h2>
                        <p className="mt-4 text-lg">
                            You can create custom knowledge graphs from your own PDFs, making our tool perfect for interdisciplinary
                            research. This feature allows you to visualize the connections between different concepts in your own
                            research papers.
                        </p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-xl">
                        <h2 className="text-2xl font-semibold">Adjustable Clustering</h2>
                        <p className="mt-4 text-lg">
                            You can create custom knowledge graphs from your own PDFs, making our tool perfect for interdisciplinary
                            research. This feature allows you to visualize the connections between different concepts in your own
                            research papers.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default Graphs