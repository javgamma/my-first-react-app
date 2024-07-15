import React from 'react'

import Button from './Button' 

const ButtonList = ({count}) => {
    const handleClick = (number) => {
      console.log(`Button clickeado: ${number}`);
    };
  
    const buttons = [];
    for (let i = 1; i <= count; i++) {
      buttons.push(<Button key={i} number={i} onClick={handleClick} />);
    }
  
    return <div className ="w-[1200px] h-[500px]"
    >{buttons}
    </div>;
  };
  
  export default ButtonList;

