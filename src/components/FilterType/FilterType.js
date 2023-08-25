import React from 'react'
import style from './FilterType.module.css'

const FilterType = ({filterHeader ,filterTypeData , onFilterChange}) => {
  const handleCheckboxChange = (e) => {
    const selectedValue = e.target.value;
    // call the passed onFilterChange function with the selected value
    onFilterChange(selectedValue);
  }

  return (
      <>
        <br />
        <p className={style.header}>{filterHeader}</p>
    <div className={style.filter_container}>
        {filterTypeData.map((item ,i)=>(
            <label key={i} className={style.filter_label}>
                <input type="checkbox"  value={item} onChange={handleCheckboxChange}/>
                &nbsp;{item}
            </label>
        ))}
    </div>
      </>
  )
}

export default FilterType
