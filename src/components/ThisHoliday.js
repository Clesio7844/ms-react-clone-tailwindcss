import React from 'react';
import HolidayImg from '../images/this_holiday_539.png';

const ThisHoliday = () => {
  return (
    <section className='hero holidayimg xl:mx-20'>
      <div>
        <img className='hero-img' src={HolidayImg} alt='holiday pass' />
      </div>
      <div className='overlay bg-gray-800 text-center px-10 py-20 text-white sm:bg-transparent sm: text-lef'>
        <h2 className='font-semibold text-xl md-2'>
          This holiday, find your joy
        </h2>
        <p className='mb-4 text'>
          Follow the story of refus, a pup whose dream takes him into Microsoft
          worlds like Minecraft, Flight Simulator, Teams and Halo
        </p>
        <button className='mr-4 bg-white text-black py-2 px-5 hover:underline hover: bg-opacity-80'>
          Watch now
        </button>
      </div>
    </section>
  );
};

export default ThisHoliday;
