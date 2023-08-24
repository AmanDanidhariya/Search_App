import React from 'react'
import style from './FilterType.module.css'

const FilterType = ({filterHeader ,filterTypeData}) => {
  return (
    <div className={style.filter_container}>
        <p className={style.header}>{filterHeader}</p>
        {filterTypeData.map((item ,i)=>(
            <label key={i} className={style.filter_label}>
                <input type="checkbox"  value={item}/>
                &nbsp;{item}
            </label>
        ))}
    </div>
  )
}

export default FilterType