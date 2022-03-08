import React from 'react';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import Variables from '../utilities/Variables';
import CardSmall from './CardSmall';

export default function SmallCardsSection() {
  return (
    <section className={`${Variables.mainSectionPadding}`}>
      <div className='mt-12'>
        <h2 className='text-2xl font-bold'> Overview - Today </h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 mt-6 '>
          {Array(8)
            .fill(' ')
            .map((el, i) =>
              i % 2 === 0 ? (
                <CardSmall
                  key={i}
                  percentage={`${Math.floor(Math.random() * 100)}%`}
                  icon={<AiFillFacebook className=' text-facebook' size={22} />}
                />
              ) : (
                <CardSmall
                  key={i}
                  percentage={`${Math.floor(Math.random() * 100)}%`}
                  icon={<AiFillYoutube className=' text-rose-800' size={22} />}
                  arrow='down'
                />
              ),
            )}
        </div>
      </div>
    </section>
  );
}
