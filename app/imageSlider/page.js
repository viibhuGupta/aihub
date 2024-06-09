import ImageSlider from '@/components/ImageSlider'
import React from 'react'

const page = () => {

  const slides = [
    { url : "http://localhost:3000/image-1.jpg" , title : "Beach"},
    { url : "http://localhost:3000/image-2.jpg" , title : "Boat"},
    { url : "http://localhost:3000/image-3.jpg" , title : "Forest"},
    { url : "http://localhost:3000/image-4.jpg" , title : "City"},
    { url : "http://localhost:3000/image-5.jpg" , title : "Italy"},
  ]

  const mainContainerStyles = {
    display : "flex",
    flexDirection : "column",
    gap : "2rem",
    justifyContent : "center",
    alignItems : "center"
  }

  const containerStyles = {
      width : "1000px",
      height:"480px",
      margin : "0 auto"
  }

  


  return (
    <div style={mainContainerStyles}>
      <h1 className='text-3xl font-semibold '>Image Slider</h1>
      <div style={containerStyles}>
      <ImageSlider slides ={slides}/>
      </div>
      
    </div>
  )
}

export default page