import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import axios from 'axios'
import { baseUrl } from '../../config'


const Home = () => {

  const [blogs,setBlogs] = useState([])
  
  const fetchBlogs = async ()=>{
    try{
    const response = await axios.get(`${baseUrl}/posts/`)
    if(response.status === 200){
      setBlogs(response.data.data)
    }else{
      console.error("Failed to fetch blogs.")
    }
  }catch(error){
    console.error("Error fetching blogs:", error)
  }
}
  useEffect(()=>{
    fetchBlogs()
  }, [])

  return (
    <Layout>
      <div className='flex flex-wrap justify-center space-x-5 mt-4 mb-5'>
        {
          blogs.length > 0 && blogs.map((blog)=>{
            console.log(blog)
            return(
              <Card key={blog.id} blog={blog} />
            )
          })
        }
       
      </div>
    </Layout>
  )
}

export default Home
