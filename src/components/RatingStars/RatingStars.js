import React from 'react'
import {FaStar} from 'react-icons/fa'

const RatingStars = ({value}) => {
        //for generated array of star elements
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          style={{
            color: index < value ? 'gold' : 'white',
            marginRight: "5px",
            fontSize: '1rem',
          }}
          
        >
          <FaStar/>
        </span>
      ));
    

  return (
    <div>  
       {stars}
    </div>
  )
}

export default RatingStars