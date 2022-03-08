import React from 'react';
import variables from '../utilities/Variables';

export default function Header({ toggleDarkMode, isChecked }) {
  return (
    <header className={`bg-bg dark:bg-darkBg ${variables.mainSectionPadding} pb-40`}>
      <div className='container'>
        <div className='flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0'>
          <div>
            <h1 className='text-slate-800  dark:text-white uppercase font-bold text-3xl'>social media dashboard</h1>
            <span className='text-sm'>Yotal Followers : 12.3456</span>
          </div>
          <div>
            <label className='mr-2 select-none cursor-pointer' htmlFor='checkbox'>
              Dark Mode
            </label>
            <input id='checkbox' type='checkbox' onChange={toggleDarkMode} checked={isChecked} />
          </div>
        </div>
      </div>
    </header>
  );
}
