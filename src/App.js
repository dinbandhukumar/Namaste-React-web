import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
/*
const heading = React.createElement(
"h1",

{id :'heading'},

"Hello world from React library !");
*/

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: 1 }, "I am in h1 tag"),
    React.createElement("h2", { key: 2 }, "I am in h2 tag"),
  ])
); 

*/

/*
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

/* This is how we use Core React to create React Element*/
//React.createElement=> ReactElement - JS Object =>HTML ELEMENT (RENDERED)

//const heading = React.createElement('h1',{id:'heading'},"Namaste from React Episode - 03");
//const root = ReactDOM.createRoot(document.getElementById('root'));

/*---------------Creating React Element using JSX--------------------------------------------------------- */
//JSX(transpiled before it reaches to Javascript Engine)- Parcel-bable
//JSX=React.createElement=> ReactElement - JS Object =>HTMLElement (Rendered)
// Jsx prevent cross site attack when js expression passed inside{}

//React functional Component - It's normal javascript function which returns piece of JSX.
// Functional component should start with Upper case letter

/* 
const Title =  () => (
  <h1 className="head" tabIndex= '5' >
  Namaste react using JSX !
  </h1>
);

//Component Compostion

const HeadingComponent = () => (
  <div id="container">
  <Title />
  {Title()}
  <Title> </Title>
    <h1 className="heading">Namaste react from functional component!</h1>
  </div>
);
*/

// *******************Creating food Ordering App like swiggy*****************************************************************
// Planning - How should app looks like when it open to browsers
// ************ Main Component for food ordering app

// Header Component
// logo
//Nav Items

// **************************************************
//Body component-
// Search button
//Restaurant container -> Restaurant card
// Img ,Name of Re, Star rating,cuisine,deleviry time
//*************************
//footer Component
//copy right
//links
//contact

// Component Compositions - using one component to other component know as Component compositions.
// **********Creating Header Component

//*****************************Creation of RestaurantCard


// *****************Creating  resObj from swiggy API **************
/*
const resObj = {
  "info": {
    "id": "393840",
    "name": "Chinese Wok",
    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    "locality": "Chikka Lakshmaiah Layout",
    "areaName": "Adugodi",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Chinese",
      "Asian",
      "Tibetan",
      "Desserts"
    ],
    "avgRating": 4.1,
    "parentId": "61955",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-04-11 02:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹149"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-1bace78f-3cd7-4b82-aeda-68597b7930a6"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-393840",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
};
*/





// ********************************Creating App layout***************************

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//const heading = <h1 id='heading'>Namste React using JSX </h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
