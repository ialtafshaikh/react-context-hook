import { createContext } from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

// firstly, create a hook
export const userContext = createContext();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Understanding React Hook - useContext</h1>
        {/* secondly provide a provider to the component */}
        <userContext.Provider value={"Altaf Shaikh"}>
          <ComponentC />
        </userContext.Provider>
      </header>
    </div>
  );
}

export default App;
