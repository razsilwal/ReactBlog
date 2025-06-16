import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { baseUrl } from '../../config'


const Register = () => {
  const navigate = useNavigate()
  const handleRegister = async (data)=>{
    console.log("Submitted data:", data)
  
   try{
    const response = await axios.post(`${baseUrl}/register/`, data)
    console.log(response)
    if(response.status === 201){
      alert("Registration Successfully")
      navigate('/login')
    }
    else{
      alert("Registration Failed")
    }
   }
   catch(error){
    const errors = error.response?.data;
      if (errors) {
        const firstError = Object.values(errors)[0];
        alert(firstError);
      } else {
        alert("Something went wrong.");
      }
   }
  }
  return (
    
    <Form type='Register' onSubmit={handleRegister} />
  )
}

export default Register
