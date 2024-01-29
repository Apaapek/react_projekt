import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router-dom';
import LoginComponent from './components/login/LoginComponent';
import FormComponent from './components/register/FormComponent';
import MealComponent from './components/meal/MealComponent';
// import HomeComponent from './path-to-components/HomeComponent';
// import DayViewComponent from './path-to-components/DayViewComponent';
import { useSelector } from 'react-redux';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
//       }
//     />
//   );
// };

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<FormComponent />} />
        {/* <PrivateRoute path="/home" component={HomeComponent} />
        <Route path="/day-view" component={DayViewComponent} /> */}
        <Route path='/' element={<LoginComponent />} exact />
        <Route path='/meals' element={<MealComponent />} exact />
      </Routes>
    </Router>
  );
};

export default AppRouter;
