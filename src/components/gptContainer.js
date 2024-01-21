import React from 'react';

const GPTCard = ({ title, imageUrl, description, linkUrl, videoUrl }) => {
    if (imageUrl === "") {
        imageUrl = "https://mggg.cloud/img/penguin.png";
    }

    return (
        <div className="py-4 px-4 w-full max-w-xs">
            <div className="flex flex-col rounded-2xl shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl bg-gradient-to-r from-white to-sky-300 hover:from-sky-100 hover:to-sky-400 p-6">
                <h3 className="mb-2 text-lg md:text-xl font-bold text-sky-700 text-center h-16 overflow-y-auto">
                    {title.replace("ChatGPT - ", "")}
                </h3>
                <div className="w-36 h-36 lg:w-48 lg:h-48 mb-2 ml-6">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover rounded-full border-4 border-sky-300 shadow"
                    />
                </div>
                <div className="h-8 overflow-y-auto">
                    {linkUrl && (
                        <a
                            href={linkUrl}
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
                        {description}
                    </p>
                </div>

                {videoUrl && (
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <iframe
                            src={videoUrl}
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                )}
                {videoUrl && (
                    <p className="mt-2 text-center text-sm md:text-base text-sky-600">
                        Watch the introduction video
                    </p>
                )}
            </div>
        </div>
    );
};

export default GPTCard;
