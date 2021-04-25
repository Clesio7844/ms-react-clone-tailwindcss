import React from 'react';
import GamepassPictuer from '../images/game_pass_539.png';

const GamePass = () => {
  return (
    <sectivon>
      <div>
        <img src={GamepassPictuer} alt='xbox gamepass' />
      </div>
      <div className='bg-gray-800 text-center p-10 text-white'>
        <h2 className='font-semibold text-xl md-2'>Xbox Game Pass Ultimate</h2>
        <p className='mb-2'>
          Get your first 3 months of xbox Game Pass Ulimate membership for $1.
          Now includes EA Play. New subscribers
        </p>
        <button className='mr-4 bg-white text-black py-2 px-5 hover:underline hover: bg-opacity-80'>
          Join now
        </button>
        <button>Compare all plans</button>
      </div>
    </sectivon>
  );
};

export default GamePass;
