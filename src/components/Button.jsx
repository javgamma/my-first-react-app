
import React from 'react'

const Button = ({number, onClick}) => {

 
  const isPrime = (number) => {
    if (number <= 1) return false;

    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  const colorClass = {
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
  };

  const getColor = (number) => {
    if (isPrime(number)) return 'red';
    return number % 2 === 0 ? 'green' : 'yellow';
  };





  return (
    <button
      onClick={() => onClick(number)} 
      className={`${colorClass[getColor(number)]} m-1 w-12 h-12 rounded-lg`}
    >
      {number}
    </button>
  );
};





export default Button
