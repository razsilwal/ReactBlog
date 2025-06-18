import React, { useState } from 'react'

const Form = ({type, onSubmit}) => {
    const [data, setData] = useState({
        title : '',
        subtitle : '',
        description : '',
        category : '',
        image : null
    })
    const handleChange = (e)=>{
        const{name,value} = e.target
        setData({
            ...data,
            [name] : name === 'upload' ? e.target.files[0] : value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        onSubmit(data)
    }

  return (
    <div className="w-full mt-4 bg-gray-800 ">
    <div className="h-72"></div>
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center text-white">{type} Blog </p>
            <form onSubmit={handleSubmit} method="post">
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">Title</label>
                        <input type="text" name='title' onChange={handleChange} className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none text-gray-300">Subtitle</label>
                        <input type="text" name='subtitle' onChange={handleChange} className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                </div>
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                    <label className="font-semibold leading-none text-gray-300" for="file_input">Upload file</label>
                    <input className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" id="file_input" name='upload' onChange={handleChange} type="file" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none text-gray-300">Category</label>
                        <input type="text" name='category' onChange={handleChange} className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none text-gray-300">Description</label>
                        <textarea type="text" name='description' onChange={handleChange} className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Form
