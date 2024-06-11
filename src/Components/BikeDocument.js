import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from './progressBar';

const BikeDocument = () => {
    const navigate  = useNavigate()
    const [progress,setProgress] = useState(6);

    const handleNextClick = (e) => {
        e.preventDefault()
        setProgress((prevProgress) => Math.min(prevProgress + 1, 7))
        navigate("/Compliance")
    }
    const [images, setImages] = useState([]);
    const [accessories, setAccessories] = useState('');
    const [specifications, setSpecifications] = useState('');
    
  
    const handleImageChange = (e) => {
      setImages([...e.target.files]);
    };
  
    const handleFileChange = (setter) => (e) => {
      setter(e.target.files[0]);
    };
  
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <form className="bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col justify-center items-center p-10 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
          <h1 className="mb-5 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-xl">
            Rent<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> myRide</span>
          </h1>
  
          <h1 className="mb-5 text-2xl font-bold text-gray-900 md:text-5xl lg:text-2xl">Bike Details</h1>

          <ProgressBar progress={progress}></ProgressBar>
  
          <div className="mb-5 w-full">
            <label htmlFor="bikeImages" className="block mb-2 text-sm font-medium text-gray-900">Upload Images <span>*</span></label>
            <input
              type="file"
              id="bikeImages"
              multiple
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              onChange={handleImageChange}
              required
            />
          </div>
  
          <div className="mb-5 w-full">
            <label htmlFor="accessories" className="block mb-2 text-sm font-medium text-gray-900">Accessories Included</label>
            <input
              type="text"
              id="accessories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Accessories included with the bike"
              value={accessories}
              onChange={(e) => setAccessories(e.target.value)}
            />
          </div>
  
          <div className="mb-5 w-full">
            <label htmlFor="specifications" className="block mb-2 text-sm font-medium text-gray-900">Bike Specifications</label>
            <textarea
              id="specifications"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Detailed specifications of the bike"
              rows="4"
              value={specifications}
              onChange={(e) => setSpecifications(e.target.value)}
            ></textarea>
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
    );
  };


export default BikeDocument