import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import logo from '../assets/logo.svg'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="sticky bg-gray-900">
            <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">
                        <span className="sr-only">Blackbyte LLC</span>
                        <img className="h-8 w-auto sm:h-10" src={logo} alt="Blackbyte Logo" />
                    </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        {/* Heroicon name: outline/menu */}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <nav className="hidden md:flex space-x-10">
                    {/* Nav Button: Work */}
                    <div className="relative">
                        {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                        <button type="button" className="group bg-gray-900 rounded-md text-white inline-flex items-center text-base font-medium hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span>Work</span>
                        </button>
                    </div>
                    {/* Nav Button: Services */}
                    <a href="/" className="text-base font-medium text-white hover:text-gray-100">
                        Services
                    </a>
                    {/* Nav Button: About */}
                    <a href="/" className="text-base font-medium text-white hover:text-gray-100">
                        About
                    </a>
                    {/* Nav Button: Contact */}
                    <div className="relative">
                        {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                        <button type="button" className="group bg-gray-900 rounded-md text-white inline-flex items-center text-base font-medium hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span>Contact</span>
                        </button>
                    </div>
                </nav>
                {/* CTA Button: Book A Call */}
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a href="/" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                        Book a Call
                    </a>
                </div>
            </div>
      
            {/*
            Mobile menu, show/hide based on mobile menu state.
        
            Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            */}
            <Transition
                show={isOpen}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                                </div>
                                <div className="-mr-2">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>
                                    {/* Heroicon name: outline/x */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5">
                            <div className="grid grid-cols-2 gap-4">
                                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Work
                                </a>
                    
                                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Services
                                </a>
                    
                                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    About
                                </a>
                    
                                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Contact
                                </a>
                            </div>
                            <div className="mt-6">
                                {/* CTA Button: Book a Call */}
                                <a href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                    Book a Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    );
}