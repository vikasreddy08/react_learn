import RestaurantCard from "./RestraurantCard"; // importing a default export
import { restaurantsList } from "../utils/mockData"; // importing a named export
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterTopRatedRestaurants = () => {
    const data = listOfRestaurants.filter(
      (restaurants) => restaurants.info.avgRating >= 4.0
    );

    setFilteredRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();

    const restaurants = findRestaurantsArray(data) || [];
    // console.log(findRestaurantsArray(data));
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    //we can simulate this using devtools->network->no throttling
    return (
      <h1>
        Looks like you are offline!!!. <br /> Please check your internet
        connection
      </h1>
    );
  }

  function findRestaurantsArray(data) {
    // Base case: If data is not an object or is null
    if (!data || typeof data !== "object") {
      return undefined;
    }

    // Check if current object has the restaurants array
    if (
      data?.card?.card?.gridElements?.infoWithStyle?.restaurants &&
      Array.isArray(data.card.card.gridElements.infoWithStyle.restaurants)
    ) {
      return data.card.card.gridElements.infoWithStyle.restaurants;
    }

    // If it's an array, search through each element
    if (Array.isArray(data)) {
      for (const item of data) {
        const found = findRestaurantsArray(item);
        if (found) return found;
      }
    }

    // If it's an object, search through all its values
    for (const key in data) {
      const found = findRestaurantsArray(data[key]);
      if (found) return found;
    }

    return undefined;
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchData = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => filterTopRatedRestaurants()}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;