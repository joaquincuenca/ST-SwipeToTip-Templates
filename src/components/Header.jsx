import React from 'react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3 xs:py-4 sm:py-5 lg:py-6">
            
            {/* Logo and Brand Section */}
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
                {/* Logo Container */}
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white font-bold text-base xs:text-lg sm:text-xl md:text-2xl">ST</span>
                </div>

                {/* Brand Text */}
                <div className="leading-tight">
                <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                    SwipeToTip
                </h1>
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 md:text-gray-600 mt-0.5">
                    Template Resources
                </p>
                </div>
            </div>

            {/* Desktop Link */}
            <a
                href="https://www.swipetotip.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
                <span>Back to Main Site</span>
                <span className="text-gray-400 text-base">→</span>
            </a>

            {/* Mobile Link - Icon Only */}
            <a
                href="https://www.swipetotip.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Back to main site"
            >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </a>
            </div>
        </div>
        </header>
    );
};

export default Header;