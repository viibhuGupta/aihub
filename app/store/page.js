"use client"

import Image from 'next/image';
import{ React , useState , useEffect} from 'react'

export default  function Page  ()  {


const [categories, setCategories] = useState([]);

useEffect(() => {
  async function fetchCategories() {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      const data = await response.json();
      setCategories(data.slice(0, 5)); // Get only the first five categories
      console.log('Categories data:', data); 
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  fetchCategories();
}, []);
  
  return (
    <>

<div>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}

            <Image
            src={category.image}
            height={200}
            width={150}
            alt='categirt'
            />
          </li>
        ))}
      </ul>
    </div>
    
    </>

   
  )
}

