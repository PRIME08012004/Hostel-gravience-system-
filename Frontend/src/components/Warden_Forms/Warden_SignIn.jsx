import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import warden_signIn from '../../assets/warden_signIn.jpg';

function Warden_SignIn() {
    const [Warden_RegistrationData, setWarden_RegistrationData] = useState({
        userName: "",
        email: "",
        password: "",
        city: "",
        state: "",
        pincode: "",
        phone: ""
    });

    const navigate = useNavigate();

    const handelWarden_RegistrationData = (e) => {
        const { name, value } = e.target;
        setWarden_RegistrationData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmitWarden_RegistrationData = async (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log("Form submission triggered"); // Debug log to check form submission

        try {
            // Send the registration data to the server
            const response = await fetch('http://localhost:5000/api/warden/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Warden_RegistrationData),
            });

            // Check if the response is ok (status in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); // Parse the JSON response
            console.log(data); // Log the response from backend

            // Reset form after submission
            setWarden_RegistrationData({
                userName: "",
                email: "",
                password: "",
                city: "",
                state: "",
                pincode: "",
                phone: ""
            });

            // Navigate to login after successful registration
            navigate('/Warden_Login_SignIn');
        } catch (error) {
            console.error("There was an error with registration!", error); // Log error
            alert("Registration failed! Please try again."); // Display error message
        }
    };

    const BackToLogin = () => {
        navigate('/Warden_Login_SignIn');
    };

    return (
        <>
            <div className='flex justify-center items-center md:gap-9 md:justify-around'>
                <div>
                    <img src={warden_signIn} className='hidden sm:block sm:w-[400px] md:w-[500px] lg:w-[600px]' alt="Warden_SignIn" />
                </div>

                <div>
                    <form onSubmit={onSubmitWarden_RegistrationData} className="space-y-8 md:mt-0 sm:mr-4 w-[300px] lg:w-[500px]">
                        <h1 className="text-4xl font-medium mb-8 text-gray-900">
                            Wardens Registration Form
                        </h1>

                        <div className="space-y-7">
                            {/* Name Field */}
                            <div className="relative flex items-center border-b border-gray-400 pb-1">
                                <div className="relative ml-2 w-full">
                                    <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                        account_circle
                                    </span>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter Your Name"
                                        name='userName'
                                        value={Warden_RegistrationData.userName}
                                        onChange={handelWarden_RegistrationData}
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
                                        required
                                        type="email"
                                        placeholder="Email"
                                        name='email'
                                        value={Warden_RegistrationData.email}
                                        onChange={handelWarden_RegistrationData}
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
                                        required
                                        type="password"
                                        placeholder="Password"
                                        name='password'
                                        value={Warden_RegistrationData.password}
                                        onChange={handelWarden_RegistrationData}
                                        className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                    />
                                </div>
                            </div>

                            {/* Contact Number Field */}
                            <div className="relative flex items-center border-b border-gray-400 pb-1">
                                <div className="relative ml-2 w-full">
                                    <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                        call
                                    </span>
                                    <input
                                        required
                                        type='tel'
                                        name='phone'
                                        placeholder='Enter your Phone Number'
                                        pattern='[0-9]{10}'
                                        value={Warden_RegistrationData.phone}
                                        onChange={handelWarden_RegistrationData}
                                        className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                    />
                                </div>
                            </div>

                            {/* Address (city & state) */}
                            <div className="relative flex items-center border-b border-gray-400 pb-1">
                                <div className='flex justify-between items-center'>
                                    <div className="relative ml-2 w-[40%]">
                                        <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                            location_on
                                        </span>
                                        <input
                                            required
                                            type="text"
                                            name='city'
                                            placeholder='City'
                                            value={Warden_RegistrationData.city}
                                            onChange={handelWarden_RegistrationData}
                                            className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                        />
                                    </div>

                                    <div className="relative ml-2 w-[40%]">
                                        <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                            public
                                        </span>
                                        <input
                                            required
                                            type="text"
                                            name='state'
                                            placeholder='State'
                                            value={Warden_RegistrationData.state}
                                            onChange={handelWarden_RegistrationData}
                                            className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Pincode Field */}
                            <div className="relative flex items-center border-b border-gray-400 pb-1 md:pb-0">
                                <div className="relative ml-2 w-full">
                                    <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                        pin
                                    </span>
                                    <input
                                        required
                                        type="number"
                                        name='pincode'
                                        placeholder='Pincode'
                                        min={100000}
                                        max={999999}
                                        value={Warden_RegistrationData.pincode}
                                        onChange={handelWarden_RegistrationData}
                                        className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-col justify-around items-center sm:items-stretch'>
                            <div className="w-full lg:w-full">
                                <button className="w-full font-semibold lg:py-2 md:py-1 py-1 px-3 text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300">
                                    Register
                                </button>
                            </div>

                            <div className='flex flex-col justify-center items-center w-full lg:mt-4 mt-2'>
                                <p className="text-center font-bold lg:text-lg md:text-sm hidden lg:block hover:underline">Already have an Account?</p>
                                <button onClick={BackToLogin} className="w-full font-semibold lg:py-2 md:py-1 py-1 px-3 text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300">
                                    Back To Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Warden_SignIn;
