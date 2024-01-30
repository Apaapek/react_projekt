import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/authActions';
import FormField from '../FormField';
import { validateUsername, validateName, validatePassword, validateWeight, validateAge, validateHeight, validateGoal, validateGender, validateActivityLevel } from '../Validator';
import "./FormComponent.css";
const FormComponent = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    weight: '',
    height: '',
    age: '',
    goal: 'schudnac', // Set a default value for the select
    gender: 'm', // Set a default value for the radio button
    activity_level: 'niski', // Set a default value for the select
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,30}$/;

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    newErrors.username = validateUsername(formData.username);
    newErrors.name = validateName(formData.name);
    newErrors.password = validatePassword(formData.password);
    newErrors.weight = validateWeight(formData.weight);
    newErrors.height = validateHeight(formData.height);
    newErrors.age = validateAge(formData.age);
    newErrors.goal = validateGoal(formData.goal);
    newErrors.gender = validateGender(formData.gender);
    newErrors.activity_level = validateActivityLevel(formData.activity_level);

    setErrors(newErrors);
    return Object.values(newErrors).every(err => err === '');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      try {
        const response = await dispatch(register(formData));
        if (response && response.payload.message === 'Ok') {
          alert('Udało się utworzyć konto');
          navigation('/login');
        } else {
          alert(response.payload.message);
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      console.log('Form is invalid');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <h2 id="initial_data">Formularz</h2>
      <form onSubmit={onSubmit}>
        <FormField
          label="Nazwa użytkownika"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={isSubmitted && errors.username}
        />

        <FormField
          label="Hasło"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={
            isSubmitted && errors.password}
        />

        <FormField
          label="Imię"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={isSubmitted && errors.name}
        />

        <FormField
          label="Waga"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          error={isSubmitted && errors.weight}
        />

        <FormField
          label="Wzrost"
          name="height"
          value={formData.height}
          onChange={handleChange}
          error={isSubmitted && errors.height}
        />

        <FormField
          label="Wiek"
          name="age"
          value={formData.age}
          onChange={handleChange}
          error={isSubmitted && errors.age}
        />

        <label htmlFor="goal">Cel</label><br />
        <select
          id="goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
        >
          <option value="schudnac">schudnac</option>
          <option value="utrzymac">utrzymac wage</option>
          <option value="przytyc">przytyc</option>
        </select>
        {isSubmitted && !formData.goal && (
          <div style={{ color: 'red' }}>Musisz wybrać cel</div>
        )}

        <br />

        <label htmlFor="gender">Płeć</label><br />
        <input
          type="radio"
          id="male"
          value="m"
          name="gender"
          checked={formData.gender === 'm'}
          onChange={handleChange}
        />
        <label for="male">mężczyzna</label>
        <input
          type="radio"
          id="female"
          value="k"
          name="gender"
          checked={formData.gender === 'k'}
          onChange={handleChange}
        />
        <label for='female'>kobieta</label>
        
        {isSubmitted && !formData.gender && (
          <div style={{ color: 'red' }}>Musisz wybrać płeć</div>
        )}

        <br />

        <label htmlFor="activity_level">Poziom aktywności</label><br />
        <select
          id="activity_level"
          name="activity_level"
          value={formData.activity_level}
          onChange={handleChange}
        >
          <option value="niski">niski poziom aktywności</option>
          <option value="lekki">lekki poziom aktywności - 1-3 treningi/tydzień</option>
          <option value="umiarkowany">umiarkowany poziom aktywności - 3-5 treningów/tydzień</option>
          <option value="wysoki">wysoki poziom aktywności - 6-7 treningów/tydzień</option>
          <option value="ultra">najwyższy poziom aktywności - 2 treningi/dzień lub praca fizyczna</option>
        </select>
        {isSubmitted && !formData.activity_level && (
          <div style={{ color: 'red' }}>Musisz wybrać poziom aktywności</div>
        )}

        <br />

        <input type="submit" value="Zarejestruj" id="btn" />
        {isSubmitted && Object.values(errors).some(error => error) && (
  <div style={{ color: 'red' }}>Poprawnie uzupełnij wszystkie pola</div>
)}
      </form>
    </div>
  );
};

export default FormComponent;
