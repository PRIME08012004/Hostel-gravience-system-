import React from 'react'

function Users() {
    return (
        <>
            <div className='absolute top-20 right-0 flex bg-blue-300 rounded-full p-3'>
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