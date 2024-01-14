'use client'

import React from 'react';

function Footer() {
    return (
        <footer className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center justify-between sm:flex-row">
                {/* Embedding Product Hunt Badge */}
                <p className="text-center text-sm text-gray-600">© 2024 Mggg GPTs Gallery. All rights reserved.</p>

                <p className="text-gray-600">
                    <a href="mailto:admin@mggg.cloud">need help?</a>
                </p>
            </div>
        </footer>
    );
}



export default Footer;
