import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if needed
  },
});

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
