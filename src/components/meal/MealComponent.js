import { MEALS } from "../../data/mock/meals.data";
const MealComponent = () => {
  return (
    <div>
      {MEALS.map((meal, index) => (
        <div key={index} className="meal">
          <h3>{meal.name} ({meal.type})</h3>
          <ul>
            {meal.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient.name}</li>
            ))}
          </ul>
          <h4>Wartości odżywcze:</h4>
          <ul>
            {meal.nutritionals.map((nutritional, idx) => (
              <li key={idx}>{nutritional.type}: {nutritional.value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default MealComponent;
