import React from 'react'
import style from './FilterType.module.css'

const FilterType = ({filterHeader ,filterTypeData}) => {
  return (
    <div className={style.filter_container}>
        <p className={style.header}>{filterHeader}</p>
        {filterTypeData.map((item)=>(
            <label key={item.id} className={style.filter_label}>
                <input type="checkbox"  value={item}/>
                {item}
            </label>
        ))}
        
    </div>
  )
}

export default FilterType