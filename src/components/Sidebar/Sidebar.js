import React from 'react'
import style from "./Sidebar.module.css"
import FilterType from '../FilterType/FilterType'

const Sidebar = () => {
    const brandArray=["Mango" , "H&M"];
    const priceRangeArray =["Under 500", "1000 To 3000"];
    
  return (
    <div className={style.sidebar_container}>
        <FilterType filterHeader="Brand" filterTypeData={brandArray}/>
        <FilterType filterHeader="Price Range" filterTypeData={priceRangeArray}/>
    </div>
  )
}

export default Sidebar