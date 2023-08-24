import React from 'react'
import style from './TrendsCard.module.css'

const TrendsCard = ({data}) => {
  return (
    <>
    {data.slice(0,5).map((product)=>(
        <div key={product.id} className={style.card_container}>
        <img src={product.image} alt={product.productName} className={style.card_image}/>
        <p className={style.card_name}>{product.productName}</p>
        </div>
    ))}
    </>  
  )
}

export default TrendsCard