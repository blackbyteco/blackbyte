import React from 'react';

export default function Services() {
    return(
        <div>
            {/* Header Section */}
            <div className="bg-gray-900">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Services</h3>
                        <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">What we do</p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">We apply our technical and creative expertise to give our clients immense value at an affordable cost.</p>
                    </div>
                </div>
            </div>
            <div className="py-12 bg-gray-900">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">What we do</h2>
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                        <div>
                            <div className="flex items-center justify-center content-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                {/* Heroicon name: outline/globe-alt */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <div className="mt-5">
                                <dt className="text-lg leading-6 text-center font-medium text-white">
                                    Engineering
                                </dt>
                                <dd className="mt-2 text-base text-center text-gray-500">
                                    Software is at the heart of everything. We leverage modern technologies to build robust applications that give our customers the advantage they need.
                                </dd>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                {/* Heroicon name: outline/scale */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <div className="mt-5">
                                <dt className="text-lg leading-6 text-center font-medium text-white">
                                    Design
                                </dt>
                                <dd className="mt-2 text-base text-center text-gray-500">
                                    Aesthetic goes a long way. We apply our passion for creativity to construct beautiful digital experiences that strengthen your project vision.
                                </dd>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                {/* Heroicon name: outline/lightning-bolt */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="mt-5">
                                <dt className="text-lg leading-6 text-center font-medium text-white">
                                    Exposure
                                </dt>
                                <dd className="mt-2 text-base text-center text-gray-500">
                                    Customers drive business growth. We help cultivate brand awareness by utilizing present-day marketing tools for organic and paid outreach.
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}