import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default RestaurantMenu = () => {
  const { restId } = useParams();

  const restaurantInfo = useRestaurantMenu(restId);

  if (restaurantInfo === null) return <Shimmer />;

  // console.log(restaurantInfo?.cards[2]?.card.card.info);
  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;

  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs {item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
