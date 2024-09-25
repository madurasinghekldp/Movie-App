'use client';
import {MdLightMode, MdDarkMode} from 'react-icons/md';
import React from 'react';
import {useTheme} from 'next-themes'

const DarkModeSwitch = () => {
    const {theme, setTheme, systemTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme:theme
  return (
    <div>{currentTheme === 'dark' ? 
    <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=>{setTheme('light')}}/>: 
    <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=>{setTheme('dark')}}/>}
    </div>
  )
}

export default DarkModeSwitch