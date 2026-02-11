import React from 'react';

export default function ResourceCard({ item }) {
    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
        >
            <div className="h-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden bg-gray-100">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                            e.target.src = 'https://placehold.co/600x400/f3f4f6/4b5563?text=AI+Tool';
                        }}
                    />
                </div>
                <div className="p-6 flex-grow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                    </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        도구 열기 &rarr;
                    </span>
                </div>
            </div>
        </a>
    );
}
