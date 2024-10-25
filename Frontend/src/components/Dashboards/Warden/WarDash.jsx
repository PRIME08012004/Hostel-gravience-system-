import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MealForm from './MealForm';
import { useDispatch, useSelector } from 'react-redux';
import { ShowMealForm, } from '../../../Redux/slices/TermsConditionSlice'
import ToastMessage from '../../ToastMessage';

function WarDash() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAddMealClicked = useSelector((state) => state.TermCondition.ViewMealForm);
  const ToastMsg = useSelector((state) => state.TermCondition.ToastMsg)


  // Mycomplaints page will display all the complaints . Now we are using this for student as well as for warden so the person who will be logged in , on baisis of that the complaints list will be displayed
  const view_Compalints = () => {
    navigate('/MyComplaints')
  }

  const show_Meal_Form = () => {
    dispatch(ShowMealForm());
  };


  return (
    <div
      className="bg-blue-200 min-h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url("https://img.freepik.com/vector-premium/presentacion-antecedentes-geometricos-abstractos_626925-728.jpg?w=1060")` }}
    >
      <nav className="bg-white shadow-lg px-2 py-4">
        <div className="flex justify-between items-center mx-10">
          {/* Title */}
          <h1 className="text-3xl font-bold text-blue-700">PHCET Warden Dashboard</h1>


          <div className="flex items-center space-x-4">
            <button
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={view_Compalints}
            >
              View Complaints
            </button>
            <button
              className="bg-gradient-to-r from-red-500 to-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={show_Meal_Form}
            >
              Add Meal
            </button>
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>


      {/* Main container for warden data and meal form */}
      <div className={` ${isAddMealClicked ? "flex " : ""} justify-around items-center`}>
        {/* warden data div  */}
        <div className={`bg-white p-6 rounded-lg shadow-md max-w-3xl  ${isAddMealClicked ? "ml-10 mt-28" : "mx-auto mt-28"}`}>
          <h2 className="text-4xl font-semibold text-blue-700 mb-6">Warden Profile</h2>
          <div className="space-y-4">
            <div className="flex justify-between  gap-11 items-center">
              <span className="text-blue-600 text-lg">Name:</span>
              <span className="text-blue-900 text-lg font-medium">Manish</span>
            </div>
            <div className="flex justify-between gap-11 items-center">
              <span className="text-blue-600 text-lg">Email:</span>
              <span className="text-blue-900 text-lg font-medium">Manish@123gmail.com</span>
            </div>
            <div className="flex justify-between gap-11 items-center">
              <span className="text-blue-600 text-lg">Phone:</span>
              <span className="text-blue-900 text-lg font-medium">98456237</span>
            </div>
            <div className="flex justify-between gap-11 items-center">
              <span className="text-blue-600 text-lg">City:</span>
              <span className="text-blue-900 text-lg font-medium">Khopoli</span>
            </div>
            <div className="flex justify-between gap-11 items-center">
              <span className="text-blue-600 text-lg">State:</span>
              <span className="text-blue-900 text-lg font-medium">Maharashtra</span>
            </div>
            <div className="flex justify-between gap-11 items-center">
              <span className="text-blue-600 text-lg">Pincode:</span>
              <span className="text-blue-900 text-lg font-medium">410213</span>
            </div>
          </div>
        </div>

        {/* meal form  */}

        <div>
          {ToastMsg && <ToastMessage ToastMessage={"Meal Added Successfully"} />}

          <div
            className={`transition-all duration-500 ease-in-out transform ${isAddMealClicked ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            {isAddMealClicked && <MealForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarDash;
