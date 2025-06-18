import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { baseUrl } from '../../config'

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = async (data)=>{
  
   try{
    console.log("handle triggered")
    const payload = {
      email: data.email,  // ✅ JWT expects 'username'
      password: data.password,
    }
    const response = await axios.post(`${baseUrl}/token/`, payload)
    console.log(response)
    if(response.status === 200){
      localStorage.setItem('access', response.data.access) 
      localStorage.setItem('refresh', response.data.refresh)

      navigate('/')
    }
    else{
      alert("Login Failed")
    }
   }
   catch(error){
    alert(error?.response?.data?.message)
   }
  }  

  return (
    
      <Form type='Login' onSubmit={handleLogin} />
   
  )
}

export default Login
