import React, { useState } from 'react';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [question, setQuestion] = useState('');
    const [email, setEmail] = useState('');
    const [submitStatus, setSubmitStatus] = useState('initial');
    const [errMsg, setErrMsg] = useState("");

    const openModal = () => {
        setIsModalOpen(true);
        setQuestion("");
        setEmail("");
        setSubmitStatus('initial');
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question, email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${data.message}`);
            }

            setSubmitStatus('success');
        } catch (error) {
            setErrMsg(error.message);
            setSubmitStatus('failure');
        } finally {
            setIsLoading(false);
        }
    };

    const LoadingSpinner = () => (
        <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
        </div>
    );

    const renderSubmitStatus = () => {
        if (submitStatus === 'success') {
            return <p className="text-green-500 text-2xl py-4">Submit successful!</p>;
        } else if (submitStatus === 'failure') {
            return <p className="text-red-500 text-2xl py-4">Submit failed: {errMsg}</p>;
        }
        return null;
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-sky-500 to-white text-black py-3 z-50">
            <div className="w-full mx-auto flex flex-wrap justify-between items-center px-4">
                <a
                    className="flex items-center gap-2 py-2 lg:py-0"
                    href="https://mggg.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="text-xl lg:text-sm hidden lg:block">Created By mggg.cloud</p>
                </a>

                <nav className="flex items-center mt-2 lg:ml-40 lg:mt-0 lg:mr-4">
                    <button className="nav-button" onClick={openModal}>
                        <a href="#custom-gpts" className=" text-sm lg:text-md hover:text-gray-800">
                            Need Custom GPTs development?
                        </a>
                    </button>
                </nav>

                {isModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                        {isLoading && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <LoadingSpinner />
                            </div>
                        )}
                        {submitStatus !== 'success' && (
                            <div className="bg-white p-4 rounded-lg">
                                {renderSubmitStatus()}
                                <h2 className="text-xl font-semibold mb-4 text-sky-600">Share your wonderful thoughts with me.</h2>
                                <div className="mb-4">
                                    <label htmlFor="question" className="block text-sm font-medium text-gray-700">😊 Great ideas about:</label>
                                    <textarea
                                        type="text"
                                        id="question"
                                        className="mt-1 p-2 w-full border rounded-md h-40 resize-none text-black"
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">🚀 Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 p-2 w-full border rounded-md text-black"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="flex justify-end items-center">
                                    <button onClick={handleSubmit} className="mx-8 px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600">Submit</button>
                                    <button onClick={closeModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">Cancel</button>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'success' && (
                            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                                <div className="bg-white p-4 rounded-lg">
                                    {renderSubmitStatus()}
                                    <div className="flex justify-end">
                                        <button onClick={closeModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">Close</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
