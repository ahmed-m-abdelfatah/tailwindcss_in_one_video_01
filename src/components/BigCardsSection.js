import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
import variables from '../utilities/Variables.js';
import CARD from './Card.js';

export default function BigCardsSection() {
  return (
    <section className={`${variables.mainSectionPadding}`}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
        <CARD
          lineColor='before:bg-facebook'
          icon={<AiFillFacebook size={22} />}
          iconColor='text-facebook'
          numberOfFlowers='1978'
        />
        <CARD
          lineColor='before:bg-twitter'
          icon={<AiFillTwitterSquare size={22} />}
          iconColor='text-twitter'
          numberOfFlowers='1044'
        />
        <CARD
          lineColor={`${variables.instagramGradientLine}`}
          icon={<AiFillInstagram size={22} />}
          iconColor={`${variables.instagramGradientIcon}`}
          numberOfFlowers='1200'
        />
        <CARD
          lineColor='before:bg-rose-700'
          icon={<AiFillYoutube size={22} />}
          iconColor='text-rose-700'
          numberOfFlowers='10000'
          arrow='down'
        />
      </div>
    </section>
  );
}
