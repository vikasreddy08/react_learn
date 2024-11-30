import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

export default RestaurantMenu = () => {
  const { restId } = useParams();

  const restaurantInfo = useRestaurantMenu(restId);

  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo === null) return <Shimmer />;

  // console.log(restaurantInfo?.cards[2]?.card.card.info);
  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;

  const categoryCardsData =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  console.log(categoryCardsData);
  return (
    <div className="py-8 flex flex-col m-auto w-7/12">
      <h1 className="font-bold text-2xl mx-5 mt-16">{name}</h1>
      <div
        className="rounded-b-[36px]"
        style={{
          background:
            "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)",
        }}
      >
        <h3 className="py-10 px-4 mx-5 my-5 border shadow-xl font-bold rounded-[20px] bg-white">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
      </div>
      <hr className="mt-7 mx-5" />
      <div className="mb-5 bg-gray-100">
        {categoryCardsData.map((category, index) => (
          <RestaurantCategory //controlled component
            data={category?.card?.card}
            key={category.card.card.title}
            showItems={index === showIndex}
            setShowIndex={() => {
              index === showIndex ? setShowIndex(null) : setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
