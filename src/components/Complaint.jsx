import React, { useState, useEffect } from "react";




const Complaint = () => {
  
  return (
    <>
      <section class="bg-gray-100 py-12 text-gray-800 sm:py-24 h-full">
        <div class="bg-gray-100 mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
          <div class="max-w-2xl px-4 lg:pr-24">
            <p class="mb-2 text-blue-600 font-bold text-xl ">PHCET Hostel Grievance Redressal</p>
            <h3 class="mb-5 text-3xl font-semibold">Submit Your Grievance</h3>
            <p class="mb-16 text-md text-gray-600">
              Hostel Grievance Redressal ensures a swift and confidential
              resolution of student concerns. We guarantee a quick response to
              submitted complaints, fostering a secure and comfortable living
              environment for all hostel residents.
            </p>
            <div class="mb-5 flex font-medium">
              <div class="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-7 w-7 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                  />
                </svg>
              </div>
              <div class="">
                <p class="mb-2">Swift Grievance Resolution</p>
                <span class="font-normal text-gray-600">
                  Swift grievance resolution prioritizes timely and effective
                  solutions, ensuring students' concerns are promptly addressed
                  and resolved.
                </span>
              </div>
            </div>
            <div class="mb-5 flex font-medium">
              <div class="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-7 w-7 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <div class="">
                <p class="mb-2">Confidentiality Assured</p>
                <span class="font-normal text-gray-600">
                  Your grievances are handled with utmost confidentiality,
                  ensuring privacy and trust throughout the hostel grievance
                  redressal process .
                </span>
              </div>
            </div>
            <div class="mb-5 flex font-medium">
              <div class="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-7 w-7 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <div class="">
                <p class="mb-2">Easy Communication</p>
                <span class="font-normal text-gray-600">
                  Effortless communication is facilitated, providing a smooth
                  and accessible channel for expressing and resolving grievances
                  within the hostel community.
                </span>
              </div>
            </div>
          </div>
          <div class="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
            <div class="relative border-b border-gray-300 p-4 py-8 sm:px-8">
              <h3 class="mb-1 inline-block text-3xl font-medium">
                <span class="mr-4">Submit Complaint</span>
                <span class="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">
                  Quick Response
                </span>
              </h3>
              <p class="text-gray-600">
                Contact us for hostel grievance redressal
              </p>
            </div>
            <div class="p-4 sm:p-8">
              <input
                id="name"
                type="text"
                class="mt-1 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter Complaint name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                id="email"
                type="text"
                class="peer mt-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your Room No."
                onChange={(e) => setRoom(e.target.value)}
              />
              <label class="mt-5 mb-2 inline-block max-w-full">
                Tell us about your grievance
              </label>
              <textarea
                id="about"
                class="mb-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <button
                class="w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white"
               
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Complaint;
