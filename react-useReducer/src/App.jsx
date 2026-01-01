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

  
  const [cart, setCart] = useState([])

  const addItem = () => {
    const newItem = `item ${cart.length + 1}`
    setCart((cart) => [...cart, newItem])
  };

  const removeItem = (index) => {
    setCart((cart) => cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };
  
  return (
    <>
      <div style={container}>
        <h2>Add to cart (using useState)</h2>
          <ul>
            {
            cart.map((item, index) => (
              <li key={item}> {item}
              &nbsp; 
                <button onClick={() => removeItem(index)} style={btns}>Remove</button>
              </li>
            
          ))
        }
          </ul>
        <button onClick={addItem}>Add item</button>
        &nbsp;
        <button onClick={clearCart}>Clear cart</button>
        <p>Total items: {cart.length}</p>
      </div>
  </>
  );
}

export default App;