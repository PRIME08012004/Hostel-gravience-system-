import React from 'react'

const ToastMessage = ({
    ToastMessage
}) => {
    console.log("i am toast")
    return (
        <div className="fixed top-20 right-16 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
            <span className="material-symbols-outlined mr-2">check_circle</span>
            <p>{ToastMessage}</p>
        </div>
    );
};

export default ToastMessage