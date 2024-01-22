import React from 'react';
import GPTCard from './gptContainer'; // 假设GPTCard组件已经定义

const Workflow = ({gptData}) => {

    const workflow_name = gptData.workflow_name;
    const steps = gptData.steps;

    return (
        <div className="px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold my-4 text-sky-600 text-center sm:text-left">
                <span className="text-sky-800">{workflow_name}</span>
            </h2>

            <div className="flex flex-col items-center md:flex-row md:justify-center">
            {steps.map((ele, index) => (
                    <React.Fragment key={index}>
                        <GPTCard
                            description={ele.description}
                            title={ele.title}
                            imageUrl={ele.imageUrl}
                            linkUrl={ele.linkUrl}
                            videoUrl={ele.videoUrl}
                        />
                        {index < steps.length - 1 && (
                            <div className="flex lg:hidden justify-center items-center my-2">
                                {/* 竖直显示的 SVG，只在小屏幕上显示 */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="h-12 w-12">
                                    <path fill="#ffffff" d="M227.68 182.95c-20.16 4.41-40.6 7.36-61.19 8.75-9.9.67-19.9 1.17-29.82.92-6.73-.17-14.22-.92-19.96-4.79-7.49-5.05-6.75-13.98-5.35-21.87 1.74-9.84 3.07-19.7 3.58-29.69.43-8.51.93-17.73-1.98-25.9-2.62-7.37-7.96-12.78-15.22-15.65-17.34-6.87-39.26-1.01-54.55 8.23-3.57 2.16-.31 7.78 3.28 5.61 7.78-4.7 16.33-7.91 25.32-9.32 7.89-1.23 16.82-1.44 24.31 1.77 8.07 3.46 11.54 10.88 12.34 19.26.9 9.47.02 19.31-1.03 28.73-1.68 15.02-9.45 35 6.72 44.86 5.91 3.61 13.1 4.74 19.91 5.14 9.3.54 18.75 0 28.03-.54 22.65-1.28 45.19-4.41 67.35-9.26 4.08-.89 2.36-7.16-1.73-6.27z"></path>
                                    <path fill="#ffffff" d="M255.06 172.05l-55.25-3.36c-4.18-.25-4.16 6.25 0 6.5l50.33 3.06c-6.79 11.78-22.45 16.75-32.74 24.7-3.3 2.55 1.33 7.12 4.6 4.6 12.83-9.92 30.13-14.77 36.19-31.39.77-2.11-1.19-4-3.13-4.11z"></path>
                                </svg>
                            </div>
                        )}
                        {index < steps.length - 1 && (
                            <div className="hidden lg:flex justify-center items-center mx-2">
                                {/* 水平显示的 SVG，只在大屏幕上显示 */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="h-12 w-12">
                                    <path fill="#ffffff" d="M227.68 182.95c-20.16 4.41-40.6 7.36-61.19 8.75-9.9.67-19.9 1.17-29.82.92-6.73-.17-14.22-.92-19.96-4.79-7.49-5.05-6.75-13.98-5.35-21.87 1.74-9.84 3.07-19.7 3.58-29.69.43-8.51.93-17.73-1.98-25.9-2.62-7.37-7.96-12.78-15.22-15.65-17.34-6.87-39.26-1.01-54.55 8.23-3.57 2.16-.31 7.78 3.28 5.61 7.78-4.7 16.33-7.91 25.32-9.32 7.89-1.23 16.82-1.44 24.31 1.77 8.07 3.46 11.54 10.88 12.34 19.26.9 9.47.02 19.31-1.03 28.73-1.68 15.02-9.45 35 6.72 44.86 5.91 3.61 13.1 4.74 19.91 5.14 9.3.54 18.75 0 28.03-.54 22.65-1.28 45.19-4.41 67.35-9.26 4.08-.89 2.36-7.16-1.73-6.27z"></path>
                                    <path fill="#ffffff" d="M255.06 172.05l-55.25-3.36c-4.18-.25-4.16 6.25 0 6.5l50.33 3.06c-6.79 11.78-22.45 16.75-32.74 24.7-3.3 2.55 1.33 7.12 4.6 4.6 12.83-9.92 30.13-14.77 36.19-31.39.77-2.11-1.19-4-3.13-4.11z"></path>
                                </svg>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Workflow;
