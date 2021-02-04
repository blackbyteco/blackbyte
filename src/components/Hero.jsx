import React from 'react'

// This is a section component
function Hero(props){
    return (
        <section>
            <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
                <div className="relative pt-6 pb-16 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                    </nav>
                </div>
            
                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Welcome to </span>
                        <span className="block text-blue-600 xl:inline">Blackbyte</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        We are a small digital services company that is focused on helping individuals and businesses prosper in the technological age.
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                        <div className="rounded-md shadow">
                        <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                            Get started
                        </a>
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                            View Our Projects
                        </a>
                        </div>
                    </div>
                    </div>
                </main>
                </div>
            </div>
        </section>
    );
  }

export default Hero;