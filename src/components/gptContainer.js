import React from 'react';

const GPTCard = ({ title, imageUrl, description, linkUrl }) => {
    return (
        <div className="py-4 px-4">
            <a
                href={linkUrl}
                className="group flex flex-col items-center justify-center rounded-2xl shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 p-6"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className="mb-4 text-xl md:text-2xl font-bold text-white truncate">
                    {title.replace("ChatGPT - ", "")}
                </h2>
                <div className="w-36 h-36 lg:w-48 lg:h-48 mb-4">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow"
                    />
                </div>
                <p className="text-center text-sm md:text-base text-white max-w-md">
                    {description}
                </p>
            </a>
        </div>
    );
};



export default GPTCard;
