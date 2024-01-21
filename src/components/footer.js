'use client'

import React from 'react';

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-sky-300 h-[48px] to-white text-sky-800 py-3">
            {/* 调整背景色为从天蓝色渐变到白色，并将文本颜色改为深天蓝色 */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4">
                <div className="text-center sm:flex sm:items-center sm:justify-end sm:space-x-4 w-full">
                    {/* Embedding Product Hunt Badge */}
                    <p className="text-sm mb-2 sm:mb-0">© 2024 GPTs Workflow Gallery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
