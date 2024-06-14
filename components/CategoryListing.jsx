import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const CategoryListing = ({ data , title }) => {
  

  // Check if data.categories exists and is an array
  const categories = Array.isArray(data.categories) ? data.categories : [];
  // console.log(categories)

  return (
    <section className='justify-center items-center flex flex-col  gap-10 mt-32 mb-4'>
      <div>
        <h1 className="text-5xl font-bold items-center flex">{title}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-20 m-9 ">
        {categories.map((category) => (
          <Link 
            href="#" 
            className=' w-auto p-3 rounded-md shadow-lg '
            key={category.id}
          >
            <div className=' w-[20rem] h-[20rem]  relative  '>
              <Image
                src={category.image}
                fill
                alt={`${category.title} image`}
                className='p-4 rounded-md'
              />
            </div>
            <h1 className='flex justify-center items-center  pt-4 pb-4 text-3xl  font-bold '>{category.title}</h1>
          </Link>
        ))}
      </div>
    </section>
  );
};

CategoryListing.displayName = 'CategoryListing';

// CategoryListing.propTypes = {
//   data: PropTypes.shape({
//     categories: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       key: PropTypes.string.isRequired,
//     })).isRequired,
//   }).isRequired,
// };

export default CategoryListing;
