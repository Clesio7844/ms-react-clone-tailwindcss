import React, { useState } from 'react';
import data from '../data/section1';

const ChooseYour = () => {
  const [cards, setCards] = useState(data);
  return (
    <section>
      {cards.map(card => {
        const { id, text, image } = card;

        return (
          <article key={id}>
            <img src={image} alt='card' />
            <p>{text}</p>
          </article>
        );
      })}
    </section>
  );
};

export default ChooseYour;
