import React from 'react'
import ImageSlider from '@/components/ImageSlider'
const SliderPages = () => {

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
          width : "1500px",
          height:"680px",
          margin : "0 auto"
      }
    
      

      
  return (
    <div style={mainContainerStyles}>
      <h1 className='text-5xl font-bold text-rose-300 '>My Favorite Place!</h1>
      <div style={containerStyles}>
      <ImageSlider slides ={slides}/>
      </div>
      
    </div>
  )
}

export default SliderPages