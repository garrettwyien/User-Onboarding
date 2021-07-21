import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Components/Form';

const initialTeam = [];
const initialFormValues = {
  //Text//
  first_name: '',
  last_name: '',
  //Email//
  email: '',
  //Password//
  password: '',
  //Checkbox//
  tos: false,
};
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false,
};
const initialDisabled = true;

function App() {
  const [ team, setTeam ] = useState(initialTeam);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  const getTeam = () => {
    axios.get(`https://reqres.in/api/users`)
      .then(res => {
        console.log(res.data.data);
        setTeam(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then(res => {
      console.log(res);
      setTeam([res.data, ...team]);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setFormValues(initialFormValues);
    })
  };

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  };

  const submitForm = () => {
    const newUser = {
      id: team.length + 1,
      email: formValues.email.trim(),
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    };
    // if (newUser.username || newUser.email || newUser.password || newUser.tos === true) 
    postNewUser(newUser);
  };

  useEffect(() => {
    getTeam()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Form App</h1>
        <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />

      </header>
    </div>
  );
}

export default App;
