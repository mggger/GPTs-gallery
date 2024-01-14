import React from 'react';

const GPTCard = ({ title, imageUrl, description, linkUrl }) => {
    return (
        <a
            href={linkUrl}
            className="group flex flex-col items-center justify-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className="mb-3 text-2xl font-semibold">
                {title.replace("ChatGPT - ", "")}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
            </h2>
            <img
                src={imageUrl}
                alt={title}
                className="w-48 h-48 object-cover py-4 items-center"
            />
            <p className="m-0 max-w-[30ch] text-sm opacity-50 items-center">
                {description}
            </p>
        </a>
    );

};

export default GPTCard;
