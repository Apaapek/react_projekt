import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigation } from '@react-navigation/native';

const DayCalendar = ({ date }) => {
  // Format the date as you desire (this is just an example)
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
    </div>
  );
};

export default DayCalendar;