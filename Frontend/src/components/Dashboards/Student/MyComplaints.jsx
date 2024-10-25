import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"; // Import useState and useEffect
import studentProfile_Bg from '../../../assets/StudentProfile_Bg.jpg'
import StuComplaints from './StuComplaints'
function MyComplaints() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]); // State to store complaints

  const Back_To_Profile = () => {
      navigate('/studentProfile');
  };

  // Fetch complaints from the backend
  const fetchComplaints = async () => {
      try {
          const response = await fetch('http://localhost:5000/api/complaints'); // Adjust your API endpoint as necessary
          if (!response.ok) {
              throw new Error('Failed to fetch complaints');
          }
          const data = await response.json();
          setComplaints(data); // Store complaints in state
      } catch (error) {
          console.error('Error fetching complaints:', error);
      }
  };

  useEffect(() => {
      fetchComplaints(); // Fetch complaints when component mounts
  }, []);

  return (
      <>
          <div className="h-[100vh] bg-center bg-cover" style={{ backgroundImage: `url(${studentProfile_Bg})` }}>
              <nav className="bg-gray-900 shadow-lg rounded-md py-3">
                  <div className="flex justify-between max-w-[95vw] items-center mx-auto">
                      <h1 className="text-2xl font-semibold text-white">My Complaints</h1>
                      <button
                          className="bg-gradient-to-r from-red-500 to-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300 ease-in-out transform hover:scale-105"
                          onClick={Back_To_Profile}
                      >
                          Back To Profile 
                      </button>
                  </div>
              </nav>
              <main className="mt-5 max-w-[95vw] mx-auto">
                  {/* Display complaints here */}
                  {complaints.length > 0 ? (
                      complaints.map((complaint, index) => (
                          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
                              <h2 className="font-semibold text-lg">{complaint.ComplaintName}</h2>
                              <p className="text-gray-600">Room: {complaint.Room}</p>
                              <p className="text-gray-600">Details: {complaint.about}</p>
                              <p className="text-gray-500 text-sm">Submitted on: {new Date(complaint.createdAt).toLocaleDateString()}</p>
                          </div>
                      ))
                  ) : (
                      <p className="text-gray-500">No complaints found.</p>
                  )}
              </main>
          </div>
      </>
  );
}

export default MyComplaints;