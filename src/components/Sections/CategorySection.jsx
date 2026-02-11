import React from 'react';
import ResourceCard from '../ResourceCard';

export default function CategorySection({ title, items }) {
    return (
        <div className="mb-16">
            <div className="flex items-center mb-8">
                <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, index) => (
                    <ResourceCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
