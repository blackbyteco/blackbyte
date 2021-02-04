import React, { useState, Component, ReactNode } from 'react'
import Header from '../components/layout/Header'

// This is a layout component
const LayoutHome: React.FC = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(true)

    return (
        <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
            <Header />
            <main className="site-content">
                {children}
            </main>
        </div>
    )
};

export default LayoutHome;