import React, { useState } from 'react'

function Users() {
    const [showUser,setshow] = useState(false);

    const showUpdate = ()=>{
        setshow((showUser) => !showUser)
    }

    return (
        <>
            <div>
                <button 
                className="bg-blue-500 mt-3 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-end animate-scale-pulse" 
                onClick={showUpdate}
                disabled = {false}
                >
                 
                    Sign In
                </button>
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