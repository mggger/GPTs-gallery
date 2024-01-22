'use client'

import React from 'react';

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-sky-300 to-white text-sky-800 py-3">
            {/* Simplified styling and removed unnecessary overflow-hidden */}
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
                {/* Utilized container class for width management and centering */}

                {/* Extracted anchor tag to a separate component for readability */}
                <ProductHuntBadge />

                <p className="text-sm text-center sm:text-left w-full sm:w-auto">
                    © 2024 GPTs Workflow Gallery. All rights reserved.
                </p>
                {/* Improved text alignment for responsiveness */}
            </div>
        </footer>
    );
}

function ProductHuntBadge() {
    return (
        <a href="https://www.producthunt.com/posts/gpts-workflow-gallery?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gpts-workflow-gallery" target="_blank" rel="noopener noreferrer">
            {/* Added rel attribute for security and SEO */}
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=435773&theme=light" alt="GPTs Workflow Gallery on Product Hunt" style={{ width: "250px", height: "54px" }} />
            {/* Improved readability of inline styles and fixed alt text for better accessibility */}
        </a>
    );
}


export default Footer;

