function logger(reducer) {
  return (preState, action) => {
    console.group(action.type);
    console.log('pre State: ', preState);
    console.log('Action: ', action);

    const newState = reducer(preState, action);

    console.log('next State: ', newState);
    console.groupEnd();
    return newState;
  };
}
export default logger;