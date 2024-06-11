import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import ProgressBar from './progressBar';

const RentingPrice = () => {
    const navigate  = useNavigate()
    const [progress,setProgress] = useState(5);

    const handleNextClick = (e) => {
        e.preventDefault()
        setProgress((prevProgress) => Math.min(prevProgress + 1, 7))
        navigate("/BikeDocument")
    }
  const [minDuration, setMinDuration] = useState('');
  const [maxDuration, setMaxDuration] = useState('');

  const handleMinDurationChange = (e) => {
    setMinDuration(e.target.value);
  };

  const handleMaxDurationChange = (e) => {
    setMaxDuration(e.target.value);
  };

  

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <form className="bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col justify-center items-center p-10 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 className="mb-5 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-xl">
          Rent<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> myRide</span>
        </h1>

        <h1 className="mb-5 text-2xl font-bold text-gray-900 md:text-5xl lg:text-2xl">Rental Info</h1>
        <ProgressBar progress={progress}></ProgressBar>

        <div className="mb-5 w-full">
          <label htmlFor="rentalPriceDaily" className="block mb-2 text-sm font-medium text-gray-900">Rental Price <span className="font-semibold">daily</span> <span>*</span></label>
          <CurrencyInput
            id="rentalPriceDaily"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter daily rental price"
            decimalsLimit={2}
            prefix="₹"
            required
          />
        </div>

        

        <div className="mb-5 w-full">
          <label htmlFor="rentalPriceWeekly" className="block mb-2 text-sm font-medium text-gray-900">Rental Price <span className="font-semibold">weekly</span> <span>*</span></label>
          <CurrencyInput
            id="rentalPriceWeekly"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter weekly rental price"
            decimalsLimit={2}
            prefix="₹"
            required
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="rentalPriceMonthly" className="block mb-2 text-sm font-medium text-gray-900">Rental Price <span className="font-semibold">monthly</span> <span>*</span></label>
          <CurrencyInput
            id="rentalPriceMonthly"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter monthly rental price"
            decimalsLimit={2}
            prefix="₹"
            required
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="availabilitySchedule" className="block mb-2 text-sm font-medium text-gray-900">Availability Schedule <span>*</span></label>
          <input
            type="text"
            id="availabilitySchedule"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter availability schedule"
            required
          />
        </div>
        
        <div className="mb-5 w-full">
          <label htmlFor="minDuration" className="block mb-2 text-sm font-medium text-gray-900">Minimum Rental Duration <span>*</span></label>
          <input
            type="number"
            id="minDuration"
            value={minDuration}
            onChange={handleMinDurationChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter minimum rental duration"
            required
          />
        </div>

        <div className="mb-5 w-full">
          <label htmlFor="maxDuration" className="block mb-2 text-sm font-medium text-gray-900">Maximum Rental Duration <span>*</span></label>
          <input
            type="number"
            id="maxDuration"
            value={maxDuration}
            onChange={handleMaxDurationChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter maximum rental duration"
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
  );
};

export default RentingPrice;