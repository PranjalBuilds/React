//useContext - use store global data in a whole react app (global state, themes, services, themes, user settings)

import { createContext } from "react";
import MainComponent from "./Components/Main/MainComponent.jsx"
export const loginContext = createContext();

function App() {
  return (
    <loginContext.Provider value={{ user: "Alice", isLoggedIn: true }}>
      <div>
        <MainComponent />
      </div>
    </loginContext.Provider>
  )
}

export default App;
