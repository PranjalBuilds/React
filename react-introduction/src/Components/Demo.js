import React from 'react'
import './../index.css'

const Demo = (props) => {

  const foodOrderHandler = () => {
    //console.log('Clicked', {title: props.title, price: props.price});

    if(props.price > 200) {
      alert(`You've got FREE DELIVERY! Order total: ₹ ${props.price} only.`)
    }
    else {
      alert (`Delivery charges apply. Order total: ₹ ${props.price} + ₹40 = ₹${props.price + 40}`)
    }
  }

  return (
    <div className='mx-2 my-1 border-gray-200 px-4 py-4 border-2 rounded-xl w-80 flex flex-col min-h-[420px] drop-shadow-lg' onClick={foodOrderHandler}>

    <div className='h-48 w-full overflow-hidden rounded-t-lg'>
      <img src={"https://picsum.photos/900/1600"} alt={props.title} className='object-cover w-full h-full'/>
    </div>

    <div className='flex flex-col justify-between flex-grow mt-4'>
    
    <div>
    <div className={props.ratings > 4.5 ? "best" : 'd-none'}>Best Seller</div>
      <div className='flex justify-between items-center'>
        <h4 className='text-lg ml-1 font-bold mt-2 truncate'>{props.title}</h4>
        <p className='text-lg font-bold text-red-600'>₹ {props.price}</p>
      </div>
    </div>


      <p className='text-gray-500 text-sm line-clamp-3 ml-1 mb-4'>{props.description}</p>
    <button className='w-full py-2 text-white font-semibold bg-red-500 rounded-lg hover:bg-red-600 transition'> Buy Now </button>

  </div>
</div>

  ) 
}

export default Demo;