import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'

// This is a layout component
const Home = (props) => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
        </>
    )
};

export default Home;