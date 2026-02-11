import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">

                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} AI 실습실. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
