import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate(); // Hook for programmatic navigation
  
  const handleLoginData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmitHandleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, navigate to the StudentProfile
        navigate('/StudentProfile');
      } else {
        // Handle error responses
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandleLogin} className="md:w-[290px] w-[250px] space-y-8 m-auto">
        <h1 className="text-4xl font-medium mb-8 text-gray-900">
          Welcome To Phcet Hostel
        </h1>

        {/* Form Fields */}
        <div className="space-y-7">
          {/* Email Field */}
          <div className="relative flex items-center border-b border-gray-400 pb-1">
            <div className="relative ml-2 w-full">
              <span className="material-symbols-outlined absolute text-gray-400 top-2">
                mail
              </span>
              <input
                type="email"
                name='email'
                id='email'
                value={loginData.email}
                onChange={handleLoginData}
                placeholder="Email"
                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
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
                placeholder="Password"
                name='password'
                id='password'
                onChange={handleLoginData}
                value={loginData.password}
                className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                required
              />
            </div>
          </div>
        </div>
        {/* Login Button */}
        <button type='submit' className="w-full font-semibold py-4 text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300">
          Login
        </button>
        {/* Sign In Link */}
        <p className="text-center text-lg font-bold mb-4 hover:underline">New Student?</p>
        <button className="w-full py-4 font-semibold text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300">
          <Link to="/Login_signIn/SignIn">
            Sign In
          </Link>
        </button>
      </form>
    </>
  );
}

export default Login;
