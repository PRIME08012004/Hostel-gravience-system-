import React from 'react'
import {  useNavigate } from 'react-router-dom'


function SignIn() {

    const navigate = useNavigate();

    const BackToLogin = () => {
        navigate('/Login_signIn')
    }
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
            }} className="w-[290px] space-y-8 m-auto">
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
                                placeholder="Enter Your Name"
                                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                            />
                        </div>
                    </div>

                    {/* Branch filed  */}
                    <div className="relative flex items-center border-b border-gray-400 pb-1">
                        <div className="relative ml-2 w-full">
                            <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                school
                            </span>
                            <input
                                type="text"
                                placeholder="Enter Your Branch"
                                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                            />
                        </div>
                    </div>

                    {/* Year field  */}
                    <div className="relative flex items-center border-b border-gray-400 pb-1">
                        <div className="relative ml-2 w-full">
                            <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                calendar_month
                            </span>
                            <input
                                type="number"
                                placeholder="Current Year"
                                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
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
                                className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                            />
                        </div>
                    </div>
                </div>


                {/* Register Button */}
                <button
                className="w-full font-semibold py-4 text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
                onClick={BackToLogin}
                >
                    Register
                </button>


                {/* back to login  */}
                <p className="text-center text-lg font-bold  mb-4 hover:underline">Already have an Account?</p>
                <button
                    onClick={BackToLogin}
                    className="w-full py-4 font-semibold text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
                >
                    Back To Login
                </button>
            </form>
        </>
    )
}

export default SignIn