import React from 'react'

function Contact() {

    return (
        <>
            <div className='flex justify-around items-center '>
                <div>
                    <h2 className='font-bold text-xl '>Need help? Let's Connect</h2>
                    <p>if you have any queries, feel free to contact us </p>
                </div>
                <div className='flex gap-20'>
                    <div className='flex flex-col justify-center items-center p-4 bg-gray-100 rounded-lg gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50"  viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 013 11.5a8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z" />
                        </svg>

                        <button className='bg-blue-300 hover:bg-blue-600 hover:text-white font-bold p-3 rounded-full'>Message us </button>
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 bg-gray-100 rounded-lg gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50"  viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>

                        <button className='bg-blue-300 hover:bg-blue-600 hover:text-white font-bold p-3 rounded-full'>Email us </button>

                    </div>
                    <div className='flex flex-col justify-center items-center p-4 bg-gray-100 rounded-lg gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50"  fill="#25D366">
                            <path d="M16 0C7.164 0 0 7.163 0 16c0 3.042.832 5.886 2.404 8.414L0 32l7.748-2.37C10.402 31.147 13.134 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.48 22.057c-.356.998-2.08 1.956-2.87 2.065-.74.104-1.637.14-2.65-.157-.61-.152-1.38-.446-2.39-.88-4.196-1.816-6.93-6.332-7.144-6.63-.21-.297-1.702-2.27-1.702-4.332s1.074-3.062 1.455-3.475c.378-.417.832-.52 1.11-.52.27 0 .556.003.796.015.261.013.61-.098.948.723.356.867 1.21 2.97 1.315 3.186.104.208.175.47.035.757-.133.285-.196.458-.39.725-.194.265-.415.59-.6.79-.208.222-.427.463-.184.91.243.445 1.08 1.764 2.307 2.854 1.582 1.407 2.91 1.84 3.367 2.048.457.208.722.175.994-.104.285-.284.668-.735.842-.99.175-.26.377-.222.62-.133.237.085 1.516.715 1.774.846.26.13.432.195.498.303.07.11.07.638-.287 1.636z" />
                        </svg>

                        <button className='bg-blue-300 hover:bg-blue-600 hover:text-white font-bold p-3 rounded-full'>Whatsapp </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact