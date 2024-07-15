import React from 'react'

import Rating from './Rating';

const UserCard = ({name,rating,gender,job,city}) => {



  return (

      <div className={`w-96 h-56 rounded-xl p-6 shadow-2xl mx-auto bg-[#445EB5] text-white m-0`}>
         <div className="flex justify-between items-start mb-3">
            <div className="text-2xl font-bold">{name}</div>
         </div>
          <Rating rating={rating}/>
           
         <div className="mt-8 text-xl tracking-wider">{gender}</div>
         <div className="mt-4 flex justify-between items-center">
            <div>
               <div className="text-xs uppercase">{job}</div>
               <div>{city}</div>
            </div>
         </div>
      </div>
  )
}

export default UserCard
