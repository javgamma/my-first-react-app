import { Star } from 'lucide-react'
import React from 'react'

const Rating = ({rating}) => {
  return(
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i<rating?`text-yellow-400 fill-current` : `text-gray-400`}
        />
      ))}
    </div>
  );
};

export default Rating
