import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Nav />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
