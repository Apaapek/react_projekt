import React, { useState, useEffect } from 'react';
import { MEALS } from '../../data/mock/meals.data';
import { nutritionType } from '../../data/enums/nutritionType.enum.ts';
import './DayViewComponent.css';
// import { useRoute } from '@react-navigation/native';

const DayView = () => {
const [meals, setMeals] = useState([]);
  const [currentDate] = useState(new Date());
  const [showTrue, setShowTrue] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isNew, setIsNew] = useState(false);
  const [nutrients] = useState(Object.values(nutritionType));
  const [ingredients, setIngredients] = useState(['']);

  // const route = useRoute();
  // const { itemId, itemName } = route.params;

useEffect(() => {
    setMeals(MEALS);
}, []);

const toggleShow = (meal) => {
    if (selectedMeal !== meal) {
      setSelectedMeal(meal);
      setShowTrue(true);
    } else {
      setShowTrue(!showTrue);
    }
  };
  
  const addNew = () => {
    setIsNew(!isNew);
    console.log(nutrients);
  };
  
  const onIngredientChange = (index) => {
    if (ingredients[index].length >= 3 && index === ingredients.length - 1) {
      setIngredients([...ingredients, '']);
    }
  };

  return (
    <div className="wrapper">
      <div className="main">
        {meals.map((meal, index) => (
          <div key={index} onClick={() => toggleShow(meal)}>
            <h2>{meal.name}</h2>
            <p>Typ: {meal.type}</p>
          </div>
        ))}
        <div className="add" onClick={addNew}>+</div>
      </div>
  
      {showTrue && (
        <div className="details">
          <h3>Ingredients:</h3>
          <ul>
            {selectedMeal.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
          <h3>Nutritional Values:</h3>
          <ul>
            {selectedMeal.nutritionals.map((nutritional, index) => (
              <li key={index}>{nutritional.type}: {nutritional.value}</li>
            ))}
          </ul>

          <div>
          {/* Item ID: {itemId}
          Item Name: {itemName} */}
          </div>
        </div>
      )}
  
      {isNew && (
        <div className="addNew">
          {/* inputs */}
        </div>
      )}
    </div>
  );
  
};


export default DayView;
