import React from 'react';
import { useNavigate } from 'react-router-dom';
import bikeImage from "../Components/Photos/360_F_322712645_JFiBlbE3w1qdds8yiDJnHFuunwePhWFq.jpg"
import bikeImage2 from "../Components/Photos/Ladies-in-Ladakh.008.jpg"
import bikeImage3 from "../Components/Photos/2022-rebel-abs-300-gallery-04-2400xauto_jpg.avif"
import bikeImage4 from "../Components/Photos/Guide-to-Group-Riding-1.jpg"

const HomePage = () => {
  const navigate = useNavigate();

  const handleRentBikeClick = () => {
    navigate('/rentBike');
  };

  const handleBecomeProviderClick = () => {
    navigate('/register');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100"
    style={{backgroundImage: `url(${bikeImage4})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-10 w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 2xl:w-1/3 text-center bg-opacity-90">
        <h1 className="mb-5 text-5xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
          Welcome to Rent<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400">myRide</span>
        </h1>
        <p className="mb-10 text-gray-700 text-lg md:text-xl">
          Discover a seamless experience for renting bikes or becoming a bike provider. Our platform connects bike owners with renters, ensuring convenience, affordability, and security for everyone.
        </p>
        <ul className="mb-10 text-left text-gray-700 text-md md:text-lg list-disc list-inside space-y-2">
          <li>Wide range of bikes available for all needs and preferences.</li>
          <li>Easy and quick rental process.</li>
          <li>Secure transactions and verified providers.</li>
          <li>Affordable rental prices with flexible duration options.</li>
          <li>24/7 customer support to assist you with any queries.</li>
        </ul>
        <div className="flex justify-around mb-10 space-x-5">
          <button
            onClick={handleRentBikeClick}
            className="text-white bg-gradient-to-r from-sky-400 to-emerald-600 hover:from-sky-600 hover:to-emerald-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-lg px-8 py-3 transition duration-300 ease-in-out"
          >
            Rent a Bike
          </button>
          <button
            onClick={handleBecomeProviderClick}
            className="text-white bg-gradient-to-r from-green-400 to-teal-600 hover:from-green-600 hover:to-teal-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-8 py-3 transition duration-300 ease-in-out"
          >
            Become a Provider
          </button>
        </div>
      </div>
    </div>
  );
};


export default HomePage;