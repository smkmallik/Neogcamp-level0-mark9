import "./styles.css";
import { useState } from "react";

export default function App() {
  var foodDB = {
    fastFood: [
      {
        foodName: "McSpicy Chicken Double Patty",
        foodRestaurant: "McDonald's"
      },
      {
        foodName: "Indi Tandoori Paneer",
        foodRestaurant: "Domino's Pizza"
      }
    ],
    northIndian: [
      {
        foodName: "Chicken Tikka Biryani",
        foodRestaurant: "Behrouz Biryani"
      },
      {
        foodName: "Paneer Butter Masala",
        foodRestaurant: "Urban Punjab"
      }
    ]
  };

  var foods = Object.keys(foodDB);

  var [selectedFoodItem, setSelectedFoodItem] = useState("fastFood");

  function foodClickHandler(food) {
    console.log(food);
    setSelectedFoodItem(food);
  }

  return (
    <div className="App">
      <header>Good Foods</header>
      <hr />

      <div className="foodButtons">
        <h4> Select your favorite food cuisine: </h4>
        {foods.map(function (food) {
          return (
            <button key={food} onClick={() => foodClickHandler(food)}>
              {food}
            </button>
          );
        })}
      </div>

      <div className="foodItems">
        <ul style={{ listStyle: "none" }}>
          {foodDB[selectedFoodItem].map((food) => {
            return (
              <li key={food}>
                <div>{food.foodName}</div>
                <div>
                  <small>
                    <em>{food.foodRestaurant}</em>
                  </small>
                </div>
                <br />
              </li>
            );
          })}
        </ul>
      </div>

      <footer>
        <div className="end-credits">Made with ❤️ Soumik Mallik</div>
      </footer>
    </div>
  );
}
