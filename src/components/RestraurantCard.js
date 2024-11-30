import { PIC_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const info = resData.info;
  return (
    <div
      className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-300"
      style={{}}
    >
      <img
        className="res-logo rounded-lg h-[50%] w-full"
        src={PIC_URL + info.cloudinaryImageId}
        alt={info.name}
      />
      <h3 className="font-bold py-2 text-lg">{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>{info.avgRating + " Stars"}</h4>
      <h4>{info.sla.slaString}</h4>
    </div>
  );
  s;
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-700 text-white m-2 p-2 rounded-lg">
          Pure veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
