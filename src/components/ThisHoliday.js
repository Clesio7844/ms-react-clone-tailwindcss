import React from 'react';
import HolidayImg from '../images/this_holiday_539.png';

const ThisHoliday = () => {
  return (
    <sectivon>
      <div>
        <img src={HolidayImg} alt='holiday pass' />
      </div>
      <div className='bg-gray-800 text-center p-10 text-white'>
        <h2 className='font-semibold text-xl md-2'>
          This holiday, find your joy
        </h2>
        <p className='mb-2'>
          Follow the story of refus, a pup whose dream takes him into Microsoft
          worlds like Minecraft, Flight Simulator, Teams and Halo
        </p>
        <button className='mr-4 bg-white text-black py-2 px-5 hover:underline hover: bg-opacity-80'>
          Watch now
        </button>
      </div>
    </sectivon>
  );
};

export default ThisHoliday;
