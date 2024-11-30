import { useDispatch } from "react-redux";
import { PIC_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const FoodItem = ({ iteminfo }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch(addItem("burger")); // this will passed as {payload:"burger"} to the action argument. which is why we use action.payload in the cartSlice reducer.
    dispatch(addItem(item));
  };

  return (
    <div className="flex py-5 border-b-2 last:border-b-0">
      <div className="w-10/12">
        <p className="font-bold text-lg">{iteminfo.name}</p>
        <p className="text-sm mt-1">₹{iteminfo.price / 100}</p>
        {iteminfo.ratings.aggregatedRating.rating ? (
          <p className="text-xs text-green-700 mt-3">
            ⭑{" "}
            {iteminfo.ratings.aggregatedRating.rating +
              " (" +
              iteminfo.ratings.aggregatedRating.ratingCountV2 +
              ")"}
          </p>
        ) : null}
        <p className="text-xs text-gray-400 mt-3">{iteminfo.description}</p>
      </div>
      <div className="w-2/12 flex flex-col justify-center">
        {iteminfo.imageId ? (
          <img
            style={{ height: "80%", width: "100%" }}
            className="res-logo rounded-lg h-[50%] w-full"
            src={PIC_URL + iteminfo.imageId}
            alt={iteminfo.name}
          />
        ) : null}
        <button
          className="text-green-600 bg-white font-bold border rounded-lg shadow relative top-[-10px] w-8/12 m-auto"
          onClick={() => handleAddItem(iteminfo)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
