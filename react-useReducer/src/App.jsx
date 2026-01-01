import { useReducer, useState } from 'react'

function reducer(state, action){
  
}
const App = () => {
  const container = { 
    margin: "50px 50px",
    height: "100vh",
  };

  const btns = {
    fontSize: "18px",
    margin: "5px",
    padding: "4px 16px",
    backgroundColor: "yellow",
    color: "black"
  };

  //const [state, dispatch] = useReducer(reducer, 0);
  const [cart, setCart] = useState(
    [
      {
        id: 10031, 
        productName: "laptop",
        price: 30000
      },
      {
        id: 10032, 
        productName: "mobile",
        price: 20000
      },
      {
        id: 10033 , 
        productName: "tablet",
        price: 10000
      },
    ]
  )

  return (
    <>
      <div style={container}>
        <h2>Add to cart (using useState)</h2>
          <ul>
            {
            cart.map((item) => (
              <li key={item.id}>{item.productName} -  ₹{item.price}
              &nbsp; 
                <button style={btns}>Remove</button>
              </li>
            
          ))
        }
          </ul>
        <button >Add item</button>
        &nbsp;
        <button>Clear cart</button>
        <p>Total items: {cart.length}</p>
      </div>
  </>
  );
}

export default App;