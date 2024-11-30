import { useState } from "react";
import FoodItem from "./FoodItem";

export default RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log("rest-data", data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="p-5 mb-5 bg-white">
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title + " (" + data.itemCards.length + ")"}
        </span>
        {!showItems ? <span>⌄</span> : <span>^</span>}
      </div>
      {showItems
        ? data?.itemCards.map((item) => (
            <FoodItem iteminfo={item.card.info} key={item.card.info.id} />
          ))
        : null}
    </div>
  );
};
