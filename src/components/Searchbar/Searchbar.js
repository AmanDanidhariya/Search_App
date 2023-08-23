import React from "react";
import style from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <div className={style.search}>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Searchbar;
