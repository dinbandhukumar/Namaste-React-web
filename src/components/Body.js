import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState } from "react";

/*   Creating Body Component */

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  /*   console.log(listOfRestaurants);   */

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(() =>
              listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.2
              )
            );
          }}
        >
          Top rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* <RestaurantCard resData = {resList[5]}  /> */}

        {/* 
       <RestaurantCard  resName ='Meghana Foods' cuisine = 'Bryani ,North Indian Food , Asian '  />
       <RestaurantCard  resName ='KFC' cuisine = 'Burger, coldrinks, Chicken, Pizza '  /> 
       */}
      </div>
    </div>
  );
};

export default Body;
