import { useReducer } from 'react'

function reducer(state, action){
  console.log("State : ", state);
  console.log("Action : ", action);

  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      if (state > 0 ){
        return state - 1;
      }
      else {
        alert("Value Must be greater 0");
        return state = 0;
      }
    default: 
      return state;
  }
}
const App = () => {
  const container = { 
    margin: "50px 50px",
    height: "100vh",
  };

  const btns = {
    fontSize: "36px",
    margin: "5px",
    padding: "18px 30px",
  };

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div style={container}>
      <h1> Count is {state}</h1>
      <div>
        <button style={btns} onClick={() => dispatch({type: "INCREMENT"})}> +</button>
        <button style={btns} onClick={() => dispatch({type: "DECREMENT"})}> -</button>
      </div>
    </div>
  )
}

export default App;