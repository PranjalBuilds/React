import React from 'react'
import { useRef, useState } from 'react'

function App() {
  let personInput = useRef()
  let amountInput = useRef()

  let [text, setText] = useState('Split your Bill 🚀')

  function billSplitter() {
    let  person = personInput.current.value 
    let  amount = amountInput.current.value
    
    let bill = parseFloat(amount/person).toFixed(2)
    // console.log("bill is : ₹", bill);

    let billText = `Your bill is: ₹${bill}`
    setText(billText)
    
  }
  return (
  <>
    <div className="w-full max-w-sm mx-auto my-40 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 space-y-6">
        <h5 className="text-2xl font-semibold text-gray-900 text-center dark:text-white"> {text} </h5>
    <div>
        <label htmlFor="person" className="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-white">Total Person</label>
            <input ref={personInput} type="number" name="person" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-center dark:text-white" placeholder="2" required />
    </div>
    <div>
        <label htmlFor="amount" className="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-white">Total Amount <span className='text-slate-400'> (in ₹) </span> </label>
            <input ref={amountInput} type="number" name="amount" id="password" placeholder="100" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500  text-center dark:placeholder-gray-400 dark:text-white" required />
    </div>
    
    <button type="submit" onClick={billSplitter} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Split</button>
</div>
  </>    

)
}

export default App
