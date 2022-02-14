import React from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

export default function card(props) {
  return (
    <div className={`card ${props.lineColor}`}>
      <div className='flex gap-2 pb-6'>
        <span className={`${props.iconColor}`}>{props.icon}</span>
        <span>@abcd</span>
      </div>
      <h2 className='text-slate-800  dark:text-white text-6xl font-bold'>{props.numberOfFlowers}</h2>
      <p className='font-medium uppercase tracking-[0.3em]'>Followers</p>
      <div
        className={`flex gap-2 pt-6 justify-center items-center ${
          props.arrow === 'down' ? 'text-rose-700' : 'text-mainGreen'
        }`}>
        {props.arrow === 'down' ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
        <span>Today</span>
      </div>
    </div>
  );
}
