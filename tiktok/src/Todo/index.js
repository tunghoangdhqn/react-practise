import { useRef, useReducer } from 'react';
import reducer, { initState } from './reducer';
import { setJob, addJob, deleteJob } from './action';
import logger from './logger';
// useReducer

function ReducerApp() {

  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handlSubmit = () => {
    console.log("handlSubmit");
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
  };
  /*
  const handleDelete = (index) => {
    console.log("handleDelete");
    dispatch(deleteJob(index));
  };*/

  return (
    <div>
      <h2>TODO</h2>
      <input
        ref={inputRef}
        value={job}
        placeholder='name...'
        onChange={e => {
          dispatch(setJob(e.target.value));
        }}
      />
      <br />
      <button onClick={handlSubmit}>Add</button>
      <br />
      <ul>
        {jobs.map((job, index) => {
          return (
            <li key={index}>{job}
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReducerApp;
