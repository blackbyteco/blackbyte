import * as React from 'react';

// Import partials
import Header from '../components/Header'
import Footer from '../components/Footer'

// Import page sections
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Site Header */}
            <Header />
            {/* Page Content */}
            <main className="flex-grow">
                {/* Page Sections */}
                <Hero />
                <Services />
            </main>
            {/* Site Footer */}
            <Footer />
        </div>
    )
}