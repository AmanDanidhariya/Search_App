import React from 'react'
import style from './TrendsCard.module.css'

const TrendsCard = ({data}) => {
  return (
    <>
    {data.map((product)=>(
        <div className={style.card_container} key={product.id}>
        <img src={product.image} alt={product.productName} className={style.card_image}/>
        <p className={style.card_name}>{product.productName}</p>
        </div>
    ))}
    </>  
  )
}

export default TrendsCard