import React from 'react'

const Button = ({ichidagiText, rangi }) => {
  return <button style={{ color: rangi ? rangi : "white" }} className='btn'>
    {ichidagiText}
    </button>;
};
export default Button;