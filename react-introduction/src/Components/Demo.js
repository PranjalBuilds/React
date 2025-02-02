import React from 'react'

const Demo = (props) => {
  return (
    <div className='mx-2 my-1 border-gray-200 px-4 py-4 border-2 rounded-xl w-80 flex flex-col h-96'>
  
  {/* Image Section */}
  <div className='h-48 w-full overflow-hidden rounded-t-lg'>
    <img src={"https://picsum.photos/900/1600"} alt={props.title} className='object-cover w-full h-full'/>
  </div>

  {/* Content Section */}
  <div className='flex flex-col justify-between flex-grow mt-4'>
    {/* Title and Price */}
    <div className='flex justify-between items-center mb-2'>
      <h4 className='text-lg font-bold truncate'>{props.title}</h4>
      <p className='text-lg font-bold text-red-600'>$ {props.price}</p>
    </div>

    {/* Description */}
    <p className='text-gray-500 text-sm line-clamp-3 mb-4'>{props.description}</p>

    {/* Button */}
    <button className='w-full py-2 text-white font-semibold bg-red-500 rounded-lg hover:bg-red-600 transition'>
      Buy Now
    </button>

  </div>
</div>

  ) 
}

export default Demo;