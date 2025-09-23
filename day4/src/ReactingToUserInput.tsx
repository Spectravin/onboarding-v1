import React, { useContext, useState } from 'react';
import SharingStateParent from './SharingStateParent';
import {AuthContext,type AuthType} from './AuthProvider'
import { enqueueSnackbar } from 'notistack';

const ReactingToUserInput = () => {
  const [input, setInput] = useState({ userName: '', userEmail: '' });
  const [formData, setFormData] = useState({ userName: '', userEmail: '' });
  const [error, setError] = useState({ nameError: '', emailError: '' });

    const auth=useContext(AuthContext);
    if(!auth){
      throw new Error('useAuth must be used within AuthProvider');
    }
    const {isLoggedIn,login,logout}=auth;

  

  const validate = () => {
    let isValid = true;
    const newErrors = { nameError: '', emailError: '' };

    if (input.userName.trim() == '') {
      newErrors.nameError = 'Enter a valid name.';
      isValid = false;
    }
    
    if (input.userEmail.trim() == '') {
      newErrors.emailError = 'Enter a valid email ID.';
      isValid = false;
    } else if (!(input.userEmail.trim().match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+[.][a-zA-Z]{2,6}$/))) {
      newErrors.emailError = 'Invalid email ID.';
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setFormData(input);
      login();
      enqueueSnackbar("Login Successfull",{
        variant:"success",
        autoHideDuration:2000,
        anchorOrigin:{
          vertical:"top",
          horizontal:"center"
        }
      })
    }else{
      logout();
      enqueueSnackbar("unable to Login",{
        variant:"info",
        autoHideDuration:2000,
        anchorOrigin:{
          vertical:"top",
          horizontal:"center"
        }})
      };
    }
  return (
    <div>
      <h3>ReactingToUserInput</h3>
      <form onSubmit={handleSubmit} style={{right:"20%"}}>
        <div>
          <label>User Name: </label>
          <input
            name="userName"
            value={input.userName}
            onChange={handleChange}
            placeholder="Enter your name"
            type="text"
          />
          <span style={{ color: 'red' }}>{error.nameError}</span>
        </div>
        <div>
          <label>Email ID: </label>
          <input
            name="userEmail"
            value={input.userEmail}
            onChange={handleChange}
            placeholder="Enter your Email"
            type="text"
          />
          <span style={{ color: 'red' }}>{error.emailError}</span>
        </div>
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <h4>Welcome {formData.userName}</h4>
      <h4>Email: {formData.userEmail}</h4>
      <SharingStateParent/>
    </div>
  );
};

export default ReactingToUserInput;