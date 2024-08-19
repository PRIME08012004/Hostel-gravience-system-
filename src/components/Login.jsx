import React from 'react';
import login from '../assets/login.png';
import LoginBg from '../assets/LoginBg.jpg';

function Login() {
    return (
        <div 
            className="relative h-screen overflow-hidden bg-cover bg-center" 
            style={{ backgroundImage: `url(${LoginBg})` }}
        >
            {/* Background Circles */}
            <div className="absolute w-52 h-52 rounded-full -top-28 -left-14 bg-gradient-to-b from-blue-500 to-transparent"></div>
            <div className="absolute w-52 h-52 rounded-full -bottom-24 -right-22 bg-gradient-to-b from-blue-500 to-transparent transform rotate-180"></div>

            {/* Main Form Container */}
            <div className="grid items-center h-screen px-4 ml-[900px]">
                <img src={login} alt="" className="absolute left-[70px] w-[700px]" />

                <form className="w-[290px] space-y-8">
                    <h1 className="text-4xl font-medium mb-8 text-gray-900">Welcome To Phcet Hostel</h1>
                    
                    {/* Form Fields */}
                    <div className="space-y-7">
                        {/* Email Field */}
                        <div className="relative flex items-center border-b border-gray-400 pb-1">
                            <div className="text-2xl text-gray-400">
                                <i className='bx bx-user-circle'></i>
                            </div>
                            <div className="relative ml-2 w-full">
                                <label className="absolute left-3 top-1 text-gray-400 text-sm transition-all">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full h-full bg-transparent border-none outline-none p-2 pl-3 text-lg text-blue-500 focus:ring-0" 
                                />
                            </div>
                        </div>
                        {/* Password Field */}
                        <div className="relative flex items-center border-b border-gray-400 pb-1">
                            <div className="text-2xl text-gray-400">
                                <i className='bx bx-lock'></i>
                            </div>
                            <div className="relative ml-2 w-full">
                                <label className="absolute left-3 top-1 text-gray-400 text-sm transition-all">Password</label>
                                <input 
                                    type="password" 
                                    className="w-full h-full bg-transparent border-none outline-none p-2 pl-3 text-lg text-blue-500 focus:ring-0" 
                                />
                            </div>
                        </div>
                        {/* Hostel ID Field */}
                        <div className="relative flex items-center border-b border-gray-400 pb-1">
                            <div className="text-2xl text-gray-400">
                                <i className='bx bx-id-card'></i>
                            </div>
                            <div className="relative ml-2 w-full">
                                <label className="absolute left-3 top-1 text-gray-400 text-sm transition-all">Hostel ID</label>
                                <input 
                                    type="text" 
                                    className="w-full h-full bg-transparent border-none outline-none p-2 pl-3 text-lg text-blue-500 focus:ring-0" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Login Button */}
                    <input 
                        type="button" 
                        className="w-full py-4 text-lg bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300" 
                        value="Login" 
                    />

                    {/* Sign In Link */}
                    <p className="text-center text-gray-500 mb-4">New Student?</p>
                    <input 
                        type="button" 
                        className="w-full py-4 text-lg bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300" 
                        value="Sign In" 
                        onClick={() => showSignInForm()} 
                    />
                </form>
            </div>
        </div>
    );
}

export default Login;
