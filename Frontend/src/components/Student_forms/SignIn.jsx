import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function SignIn() {
    const [name, setName] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Function to navigate to the login page
    const navigateToLogin = () => {
        navigate('/Login_signIn');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear any previous error message

        const studentData = { name, branch, year, email, password };

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(studentData),
            });

            const data = await response.json();

            if (response.ok) {
                // On success, navigate to the login page or show a success message
                navigateToLogin();
            } else {
                // Display error message from the server
                setErrorMessage(data.message || 'Registration failed, please try again.');
            }
        } catch (error) {
            setErrorMessage('Error occurred. Please try again.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-[290px] space-y-8 m-auto">
                <h1 className="text-4xl font-medium mb-8 text-gray-900">
                    New Student Registration
                </h1>

                {/* Form Fields */}
                <div className="space-y-7">
                    {/* Name field */}
                    <div className="relative flex items-center border-b border-gray-400 pb-1">
                        <div className="relative ml-2 w-full">
                            <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                account_circle
                            </span>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
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
                                placeholder="Enter Your Branch"
                                value={branch}
                                onChange={(e) => setBranch(e.target.value)}
                                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
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
                                placeholder="Current Year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
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
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full placeholder:pl-5 h-full bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                required
                            />
                        </div>
                    </div>
                    <div className="relative flex items-center border-b border-gray-400 pb-1">
                        <div className="relative ml-2 w-full">
                            <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                ID
                            </span>
                            <input
                                type="HostelId"
                                placeholder="HostelId"
                                name='HostelId'
                                id='HostelId'
                                value={RegistrationData.HostelId}
                                onChange= {handelRegistrationData}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full font-semibold py-4 text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
                >
                    Register
                </button>


                {/* back to login  */}
                <p className="text-center text-lg font-bold  mb-4 hover:underline">Already have an Account?</p>
                <button
                    onClick={navigateToLogin}
                    className="w-full py-4 font-semibold text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
                >
                    Back To Login
                </button>
            </form>
        </>
    );
}

export default SignIn;
