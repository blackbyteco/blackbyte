import React from 'react'

function Services(props){
    return (
      <div className="py-12 bg-white dark:bg-gray-800 content-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What we do
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              We apply our technical and creative expertise to give our clients immense value at an affordable cost.
            </p>
          </div>
  
          <div class="py-12 bg-white dark:bg-gray-800">
            <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 class="sr-only">What we do</h2>
              <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <div class="flex items-center content-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div class="mt-5">
                    <dt class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Engineering
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                      Software is at the heart of everything. We leverage modern technologies to build robust applications that give our customers the advantage they need.
                    </dd>
                    <br />
                    <ul class="text-gray-600 dark:text-gray">
                      <li>Technical Strategy</li>
                      <li>Web Development</li>
                      <li>Mobile Apps</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div class="mt-5">
                    <dt class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Design
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                      Aesthetic goes a long way. We apply our passion for creativity to construct beautiful digital experiences that strengthen your project vision.
                    </dd>
                    <br />
                    <ul class="text-gray-600 dark:text-gray">
                      <li>Brand Identity</li>
                      <li>User Interface Design</li>
                      <li>User Experience Optimization</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div class="mt-5">
                    <dt class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Exposure
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                    Customers drive business growth. We help cultivate brand awareness by utilizing present-day marketing tools for organic and paid outreach.
                    </dd>
                    <br />
                    <ul class="text-gray-600 dark:text-gray">
                      <li>Ad Management</li>
                      <li>Lead Generation</li>
                      <li>Analytics Tools</li>
                    </ul>
                  </div>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </div>
    );
  }

export default Services;