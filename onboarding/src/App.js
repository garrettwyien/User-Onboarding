import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Components/Form';
import { reach } from 'yup';
import formSchema from './validation/formSchema';
import Roster from './Components/Roster';

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
        setTeam(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then(res => {
      setTeam([res.data, ...team]);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setFormValues(initialFormValues);
    })
  };
  const validate = (name, value) => {
    reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  };

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue);
    setFormValues({ ...formValues, [inputName]: inputValue});
  };

  const submitForm = () => {
    const newUser = {
      id: team.length + 1,
      email: formValues.email.trim(),
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      password: formValues.password.trim(),
    };
    // if (newUser.username || newUser.email || newUser.password || newUser.tos === true) 
    postNewUser(newUser);
  };

  useEffect(() => {
    getTeam()
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues]);

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        disabled={disabled}
        errors={formErrors}
        />
      <Roster roster={team}/>
    </div>
  );
}

export default App;
