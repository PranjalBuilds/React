import { useReducer, useState } from 'react'

function reducer(state, action){
  console.log('State: ', state);
  console.log('Action: ', action);

  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = `item ${state.length + 1}`
      return [...state, newItem];
    }

    case 'REMOVE_ITEM': {
      return state.filter((_, i) => i !== action.index) ;
    }
      
    case 'CLEAR_CART': {
      return [];
    }
      
    default: {
      return alert('ERROR: SOMETHING WENT WRONG, TRY AGAIN!')
    }

  }
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

  
  const [cart, dispatch] = useReducer(reducer, [])

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
                <button onClick={() => dispatch({type: 'REMOVE_ITEM', index: index})} style={btns}>Remove</button>
              </li>
            
          ))
        }
          </ul>
        <button onClick={() => dispatch({type: 'ADD_ITEM'})}>Add item</button>
        &nbsp;
        <button onClick={() => dispatch({type : 'CLEAR_CART'})}>Clear cart</button>
        <p>Total items: {cart.length}</p>
      </div>
  </>
  );
}

export default App;