import React from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

export default function CardSmall(props) {
  return (
    <div className='card-sm'>
      <div className='flex items-center justify-between'>
        <h4 className=' font-bold'>Pages Views</h4>
        {props.icon}
      </div>
      <div className='flex items-center justify-between mt-8'>
        <h3 className=' font-black text-2xl text-slate-800  dark:text-white '>{Math.floor(Math.random() * 100)}</h3>
        <div className='flex items-center gap-1 text-sm'>
          <div
            className={`flex gap-2 pt-6 justify-center items-center ${
              props.arrow === 'down' ? 'text-rose-700' : 'text-mainGreen'
            }`}>
            {props.arrow === 'down' ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
            <span>{props.percentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
