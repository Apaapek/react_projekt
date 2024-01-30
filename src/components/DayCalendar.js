import React from 'react';
import { Link, Router, Route, Routes } from 'react-router-dom';
import DayView from './dayView/DayViewComponent';
// import { useNavigation } from '@react-navigation/native';

const DayCalendar = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // const navigation = useNavigation();
  // const handleItemPress = (itemId, itemName) => {
  //   // Przekazujemy parametry do ekranu DetailsScreen
  //   navigation.navigate('dayview', {
  //     itemId: itemId,
  //     itemName: itemName,
  //   });
  // };

  return (
    <div>
      <label>Wybrany dzień: </label>
      {/* <p>{formattedDate}</p> */}
      {/* <Link to={`/day/${formattedDate.day}`}>{formattedDate}</Link> */}
      {/* <button onPress={() => handleItemPress(1, 'Item 1')}></button> */}
      {/* <Link to={`/details/${formattedDate}`}> */}
      <Link to={`/dayview`}>
        <button>Go to DayView</button>
      </Link>
      <Routes>
        {/* <Route path="/details/:selectedDate" element={<DayView />} /> */}
        <Route path='/dayview'></Route>
      </Routes>
    </div>
  );
};

export default DayCalendar;