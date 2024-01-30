// HealthService.js

import { bmiCategory } from "../data/enums/bmiCategory.enum.ts";
import { Goal } from "../data/enums/goal.enum.ts";

const calculateBMI = (weight, height) => {
  height /= 100; // Convert height from cm to meters
  const bmi = weight / (height * height);
  return parseFloat(bmi.toFixed(2));
};

const calculateBMR = (gender, weight, height, age) => {
  //height /= 100; // Convert height to meters if in cm
  return gender === 'm'
      ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
      : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
};

const calculateTDEE = (activity, gender, weight, height, age) => {
  const bmr = calculateBMR(gender, weight, height, age);
  const activityScales = {
      'niski': 1.2,
      'lekki': 1.375,
      'umiarkowany': 1.55,
      'wysoki': 1.725,
      'ultra': 1.9
  };
  return parseFloat((bmr * (activityScales[activity] || 1)).toFixed(2));
};

const calculatePercentage = (calories, goalCalories, tdee) => {
  return (calories / (tdee + goalCalories)) * 100;
};

const categorizeWeight = (bmi) => {
  if (bmi < 18.5) {
    return bmiCategory.underweight;
} else if (bmi >= 18.5 && bmi <= 24.9) {
    return bmiCategory.healthy;
} else if (bmi >= 25.0 && bmi <= 29.9) {
    return bmiCategory.overweight;
} else {
    return bmiCategory.obese;
}
};

const calculateGoal = (goal) => {
  switch(goal) {
      case 'przytyc':
          return 500;
      case 'schudnac':
          return -500;
      default:
          return 0;
  }
};


// Export all functions individually
export  { calculateBMI, calculateBMR, calculateTDEE, calculatePercentage, categorizeWeight, calculateGoal };

// Or export as an object (optional)
// export default { calculateBMI, calculateBMR, calculateTDEE, calculatePercentage, categorizeWeight, calculateGoal };
