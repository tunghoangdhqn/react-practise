
import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./Reducer";
import logger from "./Logger";

function Provider({ children }) {

  // state and dispatch from userReducer
  const [state, dispatch] = useReducer(logger(reducer), initState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
}

export default Provider;