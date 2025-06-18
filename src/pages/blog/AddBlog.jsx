import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import axiosInstance from '../../utils/axiosInstance'

const AddBlog = () => {
  const handleCreateBlog = async(data)=>{
    const formData = new FormData();
  formData.append('title', data.title);
  if (data.subtitle) formData.append('subtitle', data.subtitle);
  if (data.description) formData.append('description', data.description);
  if (data.upload) formData.append('upload', data.upload); // this should be a File object
  if (data.category) formData.append('category', data.category); // must be one of 'tech', 'life', etc.
try {

    const response = await axiosInstance.post(`/posts/`, formData)
    console.log('Blog created: ', response.data)
  }catch(error){
    console.error('Error creating blog:', error.response.data)
  }
}
  return (
    <Layout>
    <Form type='Create' onSubmit = {handleCreateBlog} />
    </Layout>
  )
}


export default AddBlog
