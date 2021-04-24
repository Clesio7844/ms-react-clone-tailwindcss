import React from 'react';
import showcaseHero from '../images/hero_539.png';
import { FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section>
      <div>
        <img src={showcaseHero} alt='hero' />
      </div>
      <div>
        <p>Countdown Sale</p>
        <h1>Bundle and save up to $430</h1>
        <p>
          Complete your Surface Pro 7 with choice of select Typer Cover and free
          sleeve
        </p>
        <button>
          Show Now <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;
