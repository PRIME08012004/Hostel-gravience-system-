import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RaiseComplaint = () => {
  const [Complaint_Data, setComplaint_Data] = useState({
    Room: "",
    about: "",
    ComplaintName: ""
  });

  const navigate = useNavigate();

  const handel_Complaint_Data = (e) => {
    const { name, value } = e.target;
    setComplaint_Data((data) => ({
      ...data,
      [name]: value
    }));
  };

  const handel_Complaint_Submit = async (e) => {
    e.preventDefault();
    
    // Ensure all fields are filled out
    if (!Complaint_Data.Room || !Complaint_Data.about || !Complaint_Data.ComplaintName) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Complaint_Data),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Attempt to parse the error response
        throw new Error(errorData.message || 'Network response was not ok'); // Use specific message if available
      }
  
      const data = await response.json();
      console.log('Complaint submitted successfully:', data); 
  
      setComplaint_Data({
        Room: "",
        about: "",
        ComplaintName: ""
      });
  
      alert("Your complaint has been submitted successfully.");
      navigate('/studentProfile');
  
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert(`Error: ${error.message}`); // Display the specific error message
    }
  };
  

  const Back_To_Profile = () => {
    navigate('/studentProfile');
  };

  return (
    <section className="relative bg-gray-100 py-12 text-gray-800 sm:py-24 h-full">
      <div className="absolute top-3 right-11">
        <button
          className="bg-gradient-to-r from-red-500 to-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={Back_To_Profile}
        >
          Back To Profile
        </button>
      </div>
      <div className="bg-gray-100 mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
        <div className="max-w-2xl px-4 lg:pr-24">
          <p className="mb-2 text-blue-600 font-bold text-xl ">
            PHCET Hostel Grievance Redressal
          </p>
          <h3 className="mb-5 text-3xl font-semibold">Submit Your Grievance</h3>
          <p className="mb-16 text-md text-gray-600">
            Hostel Grievance Redressal ensures a swift and confidential
            resolution of student concerns. We guarantee a quick response to
            submitted complaints, fostering a secure and comfortable living
            environment for all hostel residents.
          </p>
          {/* Add other information or features as necessary */}
        </div>
        <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
          <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
            <h3 className="mb-1 inline-block text-3xl font-medium">
              <span className="mr-4">Submit Complaint</span>
              <span className="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">
                Quick Response
              </span>
            </h3>
            <p className="text-gray-600">
              Contact us for hostel grievance redressal
            </p>
          </div>
          <div className="p-4 sm:p-8">
            <form onSubmit={handel_Complaint_Submit}>
              <input
                type="text"
                id="ComplaintName"
                name="ComplaintName"
                className="mt-1 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-3 shadow-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition-all duration-200"
                placeholder="Enter Complaint name"
                value={Complaint_Data.ComplaintName}
                onChange={handel_Complaint_Data}
              />
              <input
                id="Room"
                name="Room"
                type="text"
                className="peer mt-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-3 shadow-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition-all duration-200"
                placeholder="Enter your Room No."
                value={Complaint_Data.Room}
                onChange={handel_Complaint_Data}
              />
              <label className="mt-5 mb-2 font-semibold text-xl inline-block max-w-full">
                Tell us about your grievance
              </label>
              <textarea
                id="about"
                name="about"
                value={Complaint_Data.about}
                onChange={handel_Complaint_Data}
                className="mb-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-3 shadow-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition-all duration-200"
                placeholder="Describe your issue here..."
              ></textarea>
              <button
                className="w-full rounded-lg bg-blue-700 p-3 text-center font-medium text-white shadow-lg transition-all duration-200 hover:bg-blue-600 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaiseComplaint;


