import React from 'react';

function StuComplaints() {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-xl font-normal">SJCE Boy's Hostel</h1>
          <div className="flex items-center space-x-6">
            <span className="text-gray-600">Account</span>
            <button className="text-blue-500 hover:text-blue-600 font-normal">Logout</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-normal text-black mb-6">Complaints</h2>
        <div className="bg-white rounded shadow-sm p-6 max-w-3xl">
          <h3 className="text-xl font-semibold mb-2">Switch is not working</h3>
          <p className="text-sm text-gray-600 mb-1">Created on Dec 15, 2023</p>
          <p className="text-sm text-gray-600 mb-4">Completed on Dec 15, 2023, 1:49:02 PM</p>
          <p className="text-gray-800 mb-4">
            I am facing issues with the switch in my room. It is not functioning correctly. I will be there after 1:30PM
          </p>
          <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm rounded-full">Completed</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={() => window.history.back()}>
            Back to Profile
          </button>
        </div>
      </main>
    </div>
  );
}

export default StuComplaints;
