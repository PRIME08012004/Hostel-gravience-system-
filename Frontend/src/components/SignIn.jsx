import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    year: '',
    email: '',
    password: ''
  });

  // State for error or success messages
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();

      if (response.ok) {
        setMessage('Registration Successful');
        // Redirect to login after successful registration
        navigate('/Login_signIn');
      } else {
        setMessage(result.message); // Show error message from server
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Server Error'); // Display server error
    }
  };

  // Handle back to login navigation
  const BackToLogin = () => {
    navigate('/Login_signIn');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-[290px] space-y-8 m-auto">
        <h1 className="text-4xl font-medium mb-8 text-gray-900">
          New Student Registration
        </h1>

        {/* Form Fields */}
        <div className="space-y-7">
          {/* Name field  */}
          <div className="relative flex items-center border-b border-gray-400 pb-1">
            <div className="relative ml-2 w-full">
              <span className="material-symbols-outlined absolute text-gray-400 top-2">
                account_circle
              </span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Branch field */}
          <div className="relative flex items-center border-b border-gray-400 pb-1">
            <div className="relative ml-2 w-full">
              <span className="material-symbols-outlined absolute text-gray-400 top-2">
                school
              </span>
              <input
                type="text"
                name="branch"
                placeholder="Enter Your Branch"
                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                value={formData.branch}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Year field */}
          <div className="relative flex items-center border-b border-gray-400 pb-1">
            <div className="relative ml-2 w-full">
              <span className="material-symbols-outlined absolute text-gray-400 top-2">
                calendar_month
              </span>
              <input
                type="number"
                name="year"
                placeholder="Current Year"
                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative flex items-center border-b border-gray-400 pb-1">
            <div className="relative ml-2 w-full">
              <span className="material-symbols-outlined absolute text-gray-400 top-2">
                mail
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative flex items-center border-b border-gray-400 pb-1">
            <div className="relative ml-2 w-full">
              <span className="material-symbols-outlined absolute text-gray-400 top-2">
                lock
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full font-semibold py-4 text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
        >
          Register
        </button>

        {/* Show Success/Error Message */}
        {message && <p className="text-center text-red-500">{message}</p>}

        {/* Back to login */}
        <p className="text-center text-lg font-bold mb-4 hover:underline">
          Already have an Account?
        </p>
        <button
          onClick={BackToLogin}
          className="w-full py-4 font-semibold text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
        >
          Back To Login
        </button>
      </form>
    </>
  );
}

export default SignIn;
