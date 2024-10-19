import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import warden_signIn from '../../assets/warden_signIn.jpg'

function Warden_SignIn() {
    const [Warden_RegistrationData, setWarden_RegistrationData] = useState({
        userName: "",
        email: "",
        password: "",
        city: "",
        State: "",
        pincode: "",
        phone: ""
    });

    const navigate = useNavigate();

    const handelWarden_RegistrationData = (e) => {
        const { name, value } = e.target;
        setWarden_RegistrationData((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    };

    const onSubmitWarden_RegistrationData = (e) => {
        e.preventDefault();
        console.log(Warden_RegistrationData)
        setWarden_RegistrationData((data) => (
            {
                userName: "",
                email: "",
                password: "",
                city: "",
                State: "",
                pincode: "",
                phone: ""
            }
        ))
        navigate('/Warden_Login_SignIn/')
    }
    const BackToLogin = () => {
        navigate('/Warden_Login_SignIn/')
    }
    return (
        <>
            <div className='flex justify-center items-center'>
                {/* image  */}
                <div>
                    <img src={warden_signIn} width={700} alt="Warden_SignIn image" />
                </div>

                {/* form container  */}
                <div>
                    <form onSubmit={onSubmitWarden_RegistrationData} className=" space-y-8 m-auto">
                        <h1 className="text-4xl font-medium mb-8 text-gray-900">
                            Wardens Registration Form
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
                                        required
                                        type="text"
                                        placeholder="Enter Your Name"
                                        name='userName'
                                        id='userName'
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
                                        id='email'
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
                                        id='password'
                                        value={Warden_RegistrationData.password}
                                        onChange={handelWarden_RegistrationData}
                                        className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                    />
                                </div>
                            </div>


                            {/* contact number  */}
                            <div className="relative flex items-center border-b border-gray-400 pb-1">
                                <div className="relative ml-2 w-full">
                                    <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                        call
                                    </span>
                                    <input
                                        required
                                        type='tel'
                                        name='phone'
                                        id='phone'
                                        placeholder='Enter your Phone Number'
                                        pattern='[0-9]{10}'
                                        value={Warden_RegistrationData.phone}
                                        onChange={handelWarden_RegistrationData}
                                        className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                    />
                                </div>
                            </div>

                            {/* Address (city & state)  */}
                            <div className="relative flex items-center border-b border-gray-400 pb-1">
                                <div className='flex justify-between items-center'>
                                    <div className="relative ml-2 w-[40%] ">
                                        <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                            <span class="material-symbols-outlined">
                                                location_on
                                            </span>
                                        </span>
                                        <input
                                            required
                                            type="text"
                                            name='city'
                                            id='city'
                                            placeholder='City'
                                            value={Warden_RegistrationData.city}
                                            onChange={handelWarden_RegistrationData}
                                            className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                        />
                                    </div>

                                    <div className="relative ml-2 w-[40%]">
                                        <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                            Public
                                        </span>
                                        <input
                                            required
                                            type="text"
                                            name='State'
                                            id='State'
                                            placeholder='State'
                                            value={Warden_RegistrationData.State}
                                            onChange={handelWarden_RegistrationData}
                                            className="w-full h-full placeholder:pl-5 bg-transparent border-none outline-none p-2 pl-8 text-lg text-blue-500 focus:ring-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* pincode  */}
                            <div className="relative flex items-center border-b border-gray-400 pb-1">
                                <div className="relative ml-2 w-full">
                                    <span className="material-symbols-outlined absolute text-gray-400 top-2">
                                        Pin
                                    </span>
                                    <input
                                        required
                                        type="number"
                                        name='pincode'
                                        id='pincode'
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


                        {/* Register Button */}
                        <button
                            className="w-full font-semibold py-4 text-lg bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
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
                </div>
            </div>
        </>
    )
}

export default Warden_SignIn