import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ProgressBar from './progressBar'
import bikeImage from "../Components/Photos/360_F_322712645_JFiBlbE3w1qdds8yiDJnHFuunwePhWFq.jpg"
import bikeImage2 from "../Components/Photos/Ladies-in-Ladakh.008.jpg"
import bikeImage3 from "../Components/Photos/2022-rebel-abs-300-gallery-04-2400xauto_jpg.avif"
import bikeImage4 from "../Components/Photos/Guide-to-Group-Riding-1.jpg"


const UserRegistration = () => {
    const navigate  = useNavigate()
    const [progress,setProgress] = useState(1);

    const handleNextClick = (e) => {
        e.preventDefault()
        setProgress((prevProgress) => Math.min(prevProgress + 1, 7))
        navigate("/profileSetup")
    }

  return (
    <div className='flex justify-center items-center w-full h-screen bg-gray-100'>
      <form className="bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col justify-center items-center p-10 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 className="mb-5 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-xl">
          Rent<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> myRide</span>
        </h1>
        
        <h1 className='mb-5 text-2xl font-semibold text-gray-900 md:text-5xl lg:text-2xl'>Finish Your Profile</h1>

        <ProgressBar progress={progress}></ProgressBar>
        
        <div className="mb-5 w-full">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">First Name <span>*</span></label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Your first name"
            required
          />
        </div>
        <div className="mb-5 w-full">
          <label htmlFor="last name" className="block mb-2 text-sm font-medium text-gray-900">Last name <span>*</span></label>
          <input
            type="text"
            id="lastname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder='Your last name'
            required
          />
        </div>
        
        <div className="mb-5 w-full">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email <span>*</span></label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder='name@flowbite.com'
            required
          />
        </div>
        <div className="mb-5 w-full">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Phone <span>*</span></label>
          <PhoneInput containerClass="mb-2 "
      inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      buttonClass="border-l border-gray-300"
      dropdownClass="bg-white border border-gray-300 rounded-lg shadow-lg" country={"in"}></PhoneInput>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full cursor-pointer px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleNextClick}
        >
          Next
        </button>
        
      </form>
      
      
    </div>
  )
}

export default UserRegistration