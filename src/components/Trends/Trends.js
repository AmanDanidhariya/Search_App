import React from "react";
import style from "./Trends.module.css";
import TrendsCard from "../TrendsCard/TrendsCard";

const Trends = ({ data }) => {
  return (
    <>
      <div className={style.trends_container}>
        <h4 className={style.trends_font}>Latest Trends</h4>
        <div className={style.trends_card_container}>
          <TrendsCard data={data} />
        </div>
        {/* <h4 className={style.trends_font}>Popular suggestions</h4> */}
      </div>
    </>
  );
};

export default Trends;
