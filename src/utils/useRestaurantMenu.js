import { useEffect, useState } from "react";
import { RESTRNT_DETAILS_API } from "./constants";
//this is custom hook
const useRestaurantMenu = (restId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const response = await fetch(RESTRNT_DETAILS_API + restId);

    const data = await response.json();
    // console.log(data);
    setRestaurantInfo(data.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
