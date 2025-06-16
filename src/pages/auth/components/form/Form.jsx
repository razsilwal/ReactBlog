import React, { useState } from 'react'
import { Link } from 'react-router'

const Form = ({ type, onSubmit }) => {
    const [data, setData] = useState({
      email : '',
      username : '',
      password : '',
    })

    const handleChange = (e) =>{
      const {name, value} = e.target
      setData({
        ...data,
        [name] :value
      })
    }
    const handleSubmit  = (e)=>{
      e.preventDefault()
      onSubmit(data)
    }

    return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          { type==='Login' ? 'Login here to Continue..' : 'Register here to continue..' }    
      </p>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleChange} />
                  </div>
                  {
                    type === 'Register' && (
                        <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johnrai" required="" onChange={handleChange} />
                    </div>
                    )
                  }
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange} />
                  </div>
                  
                  
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{type === 'Register' ? 'Create an account' : 'Login'}</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {type === 'Register' ? (
                      <>
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                          Login here
                        </Link>
                      </>
                      ) : (
                      <>
                        Don't have an account?{' '}
                        <Link to="/register" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                          Create one
                        </Link>
                      </>
                    )}
                  </p>
              </form>
          </div>
      </div>
  </div>
    </section>
  )
}

export default Form
