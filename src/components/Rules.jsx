import React, {useRef} from 'react'

function Rules() {
    const scrollRef = useRef(null);
    const scrollUP = ()=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({top: 100 ,behavior: 'smooth'})
        }
    }
    return (
        <>
            <div ref={scrollRef} className="rule flex flex-col overflow-auto  w-fit h-56  border-2 rounded-2xl m-3 sm:ml-10  shadow-2xl bg-slate-300 gap-3">
                <div>
                    <h1 className="relative text-2xl font-bold text-gray-800 border-b-2 border-black pb-2 before:content-['1.'] before:absolute before:left-0  before:pl-1 before:w-1  before:text-2xl before:text-black pl-6 flex justify-center items-center p-2">
                        User Registration and Accounts
                    </h1>
                </div>
                <div>
                    <ul className="list-disc list-inside ml-4 font-semibold p-5 text-xl text-gray-900">
                        <li className='m-1'>Users must be hostel residents or affiliated with a hostel to register and use our services</li>
                        <li className='m-1'>You are responsible for maintaining the confidentiality of your account information</li>
                        <li className='m-1'>Users must provide accurate and up-to-date information during registration.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="relative text-2xl font-bold text-gray-800 border-b-2 border-black pb-2 before:content-['2.'] before:absolute before:left-0  before:pl-1 before:w-1  before:text-2xl before:text-black pl-6 flex justify-center items-center p-2">
                        User Conduct
                    </h1>
                </div>
                <div>
                    <ul className="list-disc list-inside ml-4 font-semibold p-5 text-xl text-gray-900">
                        <li className='m-1'>Posting false, misleading, or harmful information.</li>
                        <li className='m-1'>Harassing, threatening, or discriminating against other users.</li>
                        <li className='m-1'>Attempting to hack, misuse, or disrupt the website.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="relative text-2xl font-bold text-gray-800 border-b-2 border-black pb-2 before:content-['3.'] before:absolute before:left-0  before:pl-1 before:w-1  before:text-2xl before:text-black pl-6 flex justify-center items-center p-2">
                        Complaint Submission
                    </h1>
                </div>
                <div>
                    <ul className="list-disc list-inside ml-4 font-semibold p-5 text-xl text-gray-900">
                        <li className='m-1'>Complaints should be genuine and related to hostel facilities or issues.</li>
                        <li className='m-1'>Users are expected to provide accurate details when raising a complaint.</li>
                        <li className='m-1'>Abusive, false, or frivolous complaints may result in account suspension.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="relative text-2xl font-bold text-gray-800 border-b-2 border-black pb-2 before:content-['4.'] before:absolute before:left-0  before:pl-1 before:w-1  before:text-2xl before:text-black pl-6 flex justify-center items-center p-2">
                    Roommate Matching
                    </h1>
                </div>
                <div>
                    <ul className="list-disc list-inside ml-4 font-semibold p-5 text-xl text-gray-900">
                        <li className='m-1'>Users must respect the privacy and preferences of potential roommates.</li>
                        <li className='m-1'>The website is not liable for any issues or disputes arising from roommate arrangements.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="relative text-2xl font-bold text-gray-800 border-b-2 border-black pb-2 before:content-['5.'] before:absolute before:left-0  before:pl-1 before:w-1  before:text-2xl before:text-black pl-6 flex justify-center items-center p-2">
                    Meal Polls and Other Features
                    </h1>
                </div>
                <div>
                    <ul className="list-disc list-inside ml-4 font-semibold p-5 text-xl text-gray-900">
                        <li className='m-1'>Users may participate in meal polls or other community-driven features.</li>
                        <li className='m-1'>Poll results are advisory and do not guarantee changes to meal plans or services.</li>
                        <li className='m-1'>Users must not manipulate or spam polls or any other community features.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="relative text-2xl font-bold text-gray-800 border-b-2 border-black pb-2 before:content-['6.'] before:absolute before:left-0  before:pl-1 before:w-1  before:text-2xl before:text-black pl-6 flex justify-center items-center p-2">
                    Termination of Accounts
                    </h1>
                </div>
                <div>
                    <ul className="list-disc list-inside ml-4 font-semibold p-5 text-xl text-gray-900">
                        <li className='m-1'>We have rights to suspend account for violation of terms</li>
                        <li className='m-1'>Users may also terminate their accounts by contacting support.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="relative text-2xl font-bold text-gray-800 border-b-2 border-black pb-2 before:content-['6.'] before:absolute before:left-0  before:pl-1 before:w-1  before:text-2xl before:text-black pl-6 flex justify-center items-center p-2">
                    Changes to the Terms and Conditions
                    </h1>
                </div>
                <div>
                    <ul className="list-disc list-inside ml-4 font-semibold p-5 text-xl text-gray-900">
                        <li className='m-1'>Website reserves the right to modify these Terms and Conditions at any time.</li>
                        <li className='m-1'>Users will be notified of significant change.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Rules