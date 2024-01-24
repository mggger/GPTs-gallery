import React from 'react';
import GPTCard from "@/components/gptContainer"; // 假设已定义 GPTCard 组件

const GPTSolution = ({ data }) => {

    const { title, description, cardData } = data

    return (
        <div className="items-center bg-gradient-to-r from-white to-sky-500 py-4 rounded-lg shadow-lg my-12 mx-auto max-w-7xl se:-translate-x-16 xr:-translate-x-12 sm:translate-x-0">
            <div className="px-4">
            <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left text-sky-800">
                {title}
            </h2>
            <p className="text-2xl lg:text-base text-center lg:text-left text-grey-600 mb-4 break-words">
                {description}
            </p>
            <div className="flex flex-col lg:flex-row text-gray-800 space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="lg:w-1/3 px-4">
                    <div className="py-4 px-4 w-full max-w-xs">
                        <div className="flex flex-col rounded-2xl shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl bg-gradient-to-r from-white to-sky-300 hover:from-sky-100 hover:to-sky-400 p-6">
                            <h3 className="mb-2 text-lg md:text-xl font-bold text-sky-700 text-center h-16 overflow-y-auto">
                                {cardData.title.replace("ChatGPT - ", "")}
                            </h3>
                            <div className="w-36 h-36 lg:w-48 lg:h-48 mb-2 ml-6">
                                <img
                                    src={cardData.imageUrl}
                                    alt={cardData.title}
                                    className="w-full h-full object-cover rounded-full border-4 border-sky-300 shadow"
                                />
                            </div>
                            <div className="h-8 overflow-y-auto">
                                {cardData.linkUrl && (
                                    <a
                                        href={cardData.linkUrl}
                                        className="mb-4 text-sm md:text-base text-sky-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Try it!
                                    </a>
                                )}
                            </div>
                            <div className="h-32 overflow-y-auto mb-4">
                                <p className="text-center text-sm md:text-base text-sky-600 max-w-md mb-4">
                                    {cardData.description}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                {cardData.videoUrl && (
                    <div className="lg:w-2/3 px-4 py-4" >
                        <div className="aspect-w-16 aspect-h-32 w-full h-full rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"> {/* 调整视频高度 */}
                            <iframe
                                src={cardData.videoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full" // 使视频填满容器
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default GPTSolution;
