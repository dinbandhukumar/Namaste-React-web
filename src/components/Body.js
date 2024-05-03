//import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.js";
//import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

/*   Creating Body Component */
/*  removing resList from useState(resList) and passing empty array*/

const Body = () => {
  //console.log('my body page');

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const [serchText, setSerchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);

    // Optiona chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Render
  /*   console.log(listOfRestaurants);   */

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={serchText}
            onChange={(e) => {
              setSerchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              // filtered the restra card and updat UI
              //search text
              console.log(serchText);
              // setListOfRestaurants(filteredRestaurants);

              const filterList = listOfRestaurants.filter((arg) =>
                arg.info.name.toLowerCase().includes(serchText.toLowerCase())
              );

              //console.log(filterList);
              setFilterList(filterList);
            }}
          >
            serch
          </button>
        </div>

        <button
          className="filter-btn"
          // Here we have to replace setListOfRestaurants with setFilterList.
          onClick={() => {
            setFilterList(() => listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.4
              )
            );
             //console.log(filterList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filterList.map((restaurant) => (
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

