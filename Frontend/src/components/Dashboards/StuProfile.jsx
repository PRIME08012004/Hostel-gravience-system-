import React from 'react';

function StuProfile() {
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
        <h2 className="text-2xl font-normal text-black mb-6">Profile</h2>

        <div className="bg-white rounded shadow-sm p-6 max-w-3xl">
          <div className="grid grid-cols-[200px,1fr] gap-4">
            <div className="py-3 text-gray-600">Name</div>
            <div className="py-3 text-gray-900">Chinmay Ankolekar</div>
            {/* Add remaining fields here */}
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Back</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors" onClick={() => window.location.href = '/Stucomplaints'}>
              View Your Complaints
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StuProfile;
