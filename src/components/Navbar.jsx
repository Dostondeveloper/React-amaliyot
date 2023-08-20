import React from 'react'
import Button from './Button';

const Navbar = () => {
    return (
         <div className='container'>
        <div className='nav'>
         <h1>Logo</h1>
         <ul>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Concacts</li>
        </ul>

        <Button ichidagiText="Navbatdagi button" rangi ="yellow" />
      </div>
    </div>
  );
};

export default Navbar;