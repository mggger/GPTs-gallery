'use client'

import React from 'react';

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-sky-300 to-white text-sky-800 py-3 overflow-hidden">
            {/* 添加 overflow-hidden 防止内容溢出 */}
            <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
                {/* 确保容器不超过屏幕宽度，并且内容居中 */}
                <p className="text-sm text-center w-full">© 2024 GPTs Workflow Gallery. All rights reserved.</p>
                {/* 简化结构，移除不必要的div包装 */}
            </div>
        </footer>
    );
}

export default Footer;

