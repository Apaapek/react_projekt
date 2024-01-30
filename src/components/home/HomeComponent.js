import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './HomeComponent.css';
import {calculateBMI, calculateGoal, calculateTDEE, categorizeWeight} from '../../services/HealthService';
import  bmiCategory  from "../../data/enums/bmiCategory.enum.ts";
import DayCalendar from '../DayCalendar.js';

const HomeComponent = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [tempGoal, setTempGoal] = useState(user ? user.goal : '');
  const [tempHeight, setTempHeight] = useState(user ? user.height : '');
  const [tempWeight, setTempWeight] = useState(user ? user.weight : '');
  const [tempActivity, setTempActivity] = useState(user ? user.activity_level : '');
  const [tempGender,setTempGender] = useState(user ? user.gender : '');
  const [ingredients, setIngredients] = useState([]);
  const [bmi, setBMI] = useState('');
  const [weightCategory, setWeightCategory] = useState('');
  const [goalCalories,setgoalCalories] = useState('');
  const [userTDEE,setUserTDEE] = useState('');
  const [userAge,setUserAge] = useState(user ? user.age : '');
  const [dailyCalories,setDailyCalories] = useState('');
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const calculatedBMI = calculateBMI(tempWeight, tempHeight);
    setBMI(calculatedBMI);
    const category = categorizeWeight(calculatedBMI);
    setWeightCategory(category);
    const goalCaloriesValue = calculateGoal(tempGoal);
    setgoalCalories(goalCaloriesValue);
    const tempTDEE = calculateTDEE(tempActivity,tempGender,tempWeight,tempHeight,userAge);
    setUserTDEE(tempTDEE);
    setDailyCalories(userTDEE+goalCalories);
  }, [tempWeight,tempHeight,bmi,dailyCalories]);


  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');



  };
  

  const handleDateChange = (event) => {

    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  return (
    <div>
      {user ? (
        <div className="main">
          <div className="topPanel">
            <h1>Witaj {user.name}!</h1>
            <p>Twój cel to: {tempGoal}</p>
            {/* details */}
          </div>
          <div className="bodyDetails">
            
            <p>Twój wskaźnik BMI wynosi: {bmi} </p>
            <p>co umiejscawia cię w kategorii:{weightCategory}</p>
            <p>Uwzględniając Twój poziom aktywności , aby {tempGoal}, potrzebujesz przyjmować {dailyCalories} kalorii dziennie</p>
          </div>
          <div className='calendar'>
            <h3>Plan najbliższych posiłków: </h3>
            <label for="data" >Wybierz datę: </label>
            <input
              type="date"
              id="data"
              value={selectedDate.toISOString().split('T')[0]}
              onChange={handleDateChange}
            />

            <DayCalendar date={selectedDate} />
          </div>
          <a className="logout" onClick={handleLogout} href="/login">[wyloguj]</a>
        </div>
      ) : (
        <p>No user data available</p>
      )}
      
    </div>
  );
};
export default HomeComponent;