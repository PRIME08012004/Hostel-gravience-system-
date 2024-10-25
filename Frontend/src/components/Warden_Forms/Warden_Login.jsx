import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import warden_Login from '../../assets/warden_Login.jpg';

function Warden_Login() {
    const navigate = useNavigate();
    const [WardenLoginData, setWardenLoginData] = useState({
        email: "",
        password: ""
    });

    const handel_Warden_LoginData = (e) => {
        const { name, value } = e.target;
        setWardenLoginData({
            ...WardenLoginData,
            [name]: value
        });
    };

    const onSubmitHandelLogin = async (e) => {
      e.preventDefault();
      console.log("submit successfully");
  
      try {
          // Send the login data to the server
          const response = await fetch('http://localhost:5000/api/warden/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(WardenLoginData),
          });
  
          // Check if the response is ok
          if (!response.ok) {
              // Attempt to parse the response as JSON
              const errorData = await response.json().catch(() => {
                  // If parsing fails, handle the empty or invalid response
                  throw new Error('Login failed: Invalid server response');
              });
              console.error('Error response:', errorData); // Log the error response
              throw new Error(errorData.message || 'Login failed'); // Display error message
          }
  
          const data = await response.json(); // Parse the JSON response
          console.log(data); // Log the response from backend
  
          // Reset form after successful login
          setWardenLoginData({
              email: "",
              password: ""
          });
  
          // Navigate to the dashboard after successful login
          navigate('/warden_dashboard');
      } catch (error) {
          console.error("There was an error with login!", error); // Log error
          alert(error.message); // Display error message
      }
  };
  

    return (
        <>
            {/* container */}
            <div className='flex justify-center items-center md:justify-around h-[100vh]'>
                {/* image for login form */}
                <div>
                    <img
                        src={warden_Login}
                        className='hidden sm:w-[350px] md:w-[500px] sm:block'
                        alt="warden_login_image"
                    />
                </div>

                {/* form for performing login to warden */}
                <div>
                    <form onSubmit={onSubmitHandelLogin} className="sm:w-[270px] md:w-[280px] md:mr-10 w-[250px] space-y-8">
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
                                        value={WardenLoginData.email}
                                        onChange={handel_Warden_LoginData}
                                        placeholder="Email"
                                        className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
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
                                        onChange={handel_Warden_LoginData}
                                        value={WardenLoginData.password}
                                        className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button type='submit' className="w-full font-semibold py-4 text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300">
                            Login
                        </button>
                        {/* Sign In Link */}
                        <p className="text-center text-lg font-bold mb-4 hover:underline">Don't have an Account?</p>
                        <button className="w-full py-4 font-semibold text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300">
                            <Link to="/Warden_Login_SignIn/warden_signIn">
                                Sign In
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Warden_Login;
