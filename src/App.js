import { useState } from 'react';
import BigCardsSection from './components/BigCardsSection';
import Header from './components/Header';
import SmallCardsSection from './components/SmallCardsSection';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const toggleDarkMode = e => setDarkMode(e.target.checked);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='text-slate-400 pb-8 dark:bg-darkBg dark:text-slate-300'>
        <Header toggleDarkMode={toggleDarkMode} isChecked={darkMode} />
        <div className='container -mt-40'>
          <BigCardsSection />
          <SmallCardsSection />
        </div>
      </main>
    </div>
  );
}
