import React from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router'

const SingleBlog = () => {
  return (
    <Layout>
        <main className="container mx-auto mt-8">
    <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-8/12 px-4 mb-8">
            <img src="https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg" alt="Featured Image" className="w-full h-64 object-cover rounded" />
            <h2 className="text-4xl font-bold mt-4 mb-2">My Blog Title</h2>
            <p className="text-right text-gray-500 text-sm">Published on <time datetime="2022-04-05">june 12, 2024</time></p>

            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            
    </div><div className="w-full md:w-4/12 px-4 mb-8">
            <div className="bg-gray-100 px-4 py-6 rounded">
                <h3 className="text-lg font-bold mb-2">Categories</h3>
                <ul className="list-disc list-inside">
                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Technology</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Travel</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Food</a></li>
                </ul>
            </div>
        </div>
    </div>
        <div classNameName="flex justify-center items-center space-x-2">
        <Link to='/blog/edit'>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button></Link>
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
        </div>
</main>
   </Layout>
  )
}

export default SingleBlog
