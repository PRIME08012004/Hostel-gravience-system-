import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import check from '../assets/check.png'
import Fingure from '../assets/fingure1.png'


function Users() {
    const [showUser, setshow] = useState(false);
    const checkboxValue = useSelector((state) => state.TermCondition.checkBoxState);

    const showUpdate = () => {
        setshow((showUser) => !showUser)
    }

    return (
        <>
            <div>
                <button
                    className="bg-blue-500  mt-3 mr-5 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-end animate-scale-pulse"
                    onClick={showUpdate}
                    disabled={checkboxValue ? false : true}
                >
                    Sign In

                </button>
                {
                    checkboxValue ? "" : <div className='absolute bg-blue-600 flex justify-center items-center   p-2 text-white top-2.5  right-44 rounded-3xl font-semibold '>
                        <div><img src={check} width={30} className='inline' /></div>
                        <div> the checkbox</div>
                        <div className='absolute right-[-55px] top-4 animate-liner-pulse'><img src={Fingure} width={50} /></div>
                    </div>
                }
            </div>
            <div className={`absolute top-2 right-32 md:top-16 md:right-2 flex bg-blue-300 rounded-full p-1.5 md:p-3 duration-200 ${showUser ? "visible" : "hidden"}`}>
                <div className="bg-gray-500 m-1 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                    <button >
                        Student
                    </button>
                </div>
                <div className="bg-gray-500 m-1 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                    <button >
                        Warden
                    </button>
                </div>

            </div>
        </>
    )
}

export default Users