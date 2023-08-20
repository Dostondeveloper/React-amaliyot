import React from 'react'
import Button from './Button';

const Footer = () => {
  return (
    <div className='container'>
        <div className='footer-wrapper'>
        <h1>Logo company</h1>
        <Button ichidagiText="Footer-button" rangi="black" />
        <div>©Logo Company | 2023</div>
        </div>
    </div>
  )
};

export default Footer;