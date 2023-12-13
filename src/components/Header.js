import React from 'react';
import TrollFace from '../assets/TrollFace.png';

function Header() {
  return (
    <header className='header'>
        <img className='header--image' src={TrollFace} alt='Error 3069'/>
        <h2 className='header--title'>Header Component</h2>
        <h4 className='header--project'>React Course - Project 3</h4>
    </header>
)
}

export default Header
