import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProgressBar from './progressBar'
import { useState } from 'react'

const DocumentUpload = () => {
    const navigate  = useNavigate()
    const [progress,setProgress] = useState(3);

    const handleNextClick = (e) => {
        e.preventDefault()
        setProgress((prevProgress) => Math.min(prevProgress + 1, 7))
        navigate("/bikelisting")
    }
  return (
    <div className='flex justify-center items-center w-full h-screen bg-gray-100'>
      <form className="bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col justify-center items-center p-10 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 className="mb-5 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-xl">
          Rent<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> myRide</span>
        </h1>
        
        <h1 className='mb-5 text-2xl font-semibold text-gray-900 md:text-5xl lg:text-2xl'>Profile Setup</h1>
        <ProgressBar progress={progress}></ProgressBar>
        
        <div className="mb-5 w-full">
          <label htmlFor="profilePicture" className="block mb-2 text-sm font-medium text-gray-900">Profile Picture/Business Logo <span>*</span></label>
          <input
            type="file"
            id="profilePicture"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            accept="image/*"
            required
          />
        </div>
        <div className="mb-5 w-full">
          <label htmlFor="bankAccountNumber" className="block mb-2 text-sm font-medium text-gray-900">Bank Account Number <span>*</span></label>
          <input
            type="text"
            id="bankAccountNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Bank account number"
            required
          />
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

export default DocumentUpload
