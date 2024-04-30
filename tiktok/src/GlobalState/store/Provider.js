
import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./Reducer";

function Provider({ children }) {

  // state and dispatch from userReducer
  const [state, dispatch] = useReducer(reducer, initState);


  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
}

export default Provider;