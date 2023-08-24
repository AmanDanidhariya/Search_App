import React, { useRef, useState } from "react";
import style from "./Searchbar.module.css";

const Searchbar = ({onFocus , onBlur , onSearchQueryChange}) => {
  const inputRef = useRef();

  const handleSearchChange = (e) =>{
    const searchQuery = (inputRef.current.value);
    //pass searchQuery to the parent
    onSearchQueryChange(searchQuery);
  }
  
  return (
    <div className={style.search}>
      <input 
      type="text" 
      placeholder="Search" 
      ref={inputRef}
      onChange={handleSearchChange}
      onFocus={onFocus} 
      onBlur={onBlur}/>
    </div>
  );
};

export default Searchbar;
