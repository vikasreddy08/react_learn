import { PIC_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const info = resData.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={PIC_URL + info.cloudinaryImageId}
        alt={info.name}
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>{info.avgRating + " Stars"}</h4>
      <h4>{info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
