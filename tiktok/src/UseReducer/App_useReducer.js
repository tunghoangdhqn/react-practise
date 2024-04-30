import { useState, memo, useCallback, useMemo, useRef, useReducer } from 'react';
import Content from '../Content';

// useReducer
// init state
const initState = {
  job: '',
  jobs: []
};

// actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

// truyền biến payload để gửi data
const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  };
};

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  };
};

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  };
};

// reducer
const reducer = (state, actions) => {
  console.log('Action: ', actions);
  console.log('Pre sate: ', state);
  let newState;

  switch (actions.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: actions.payload
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, actions.payload]
      };
      break;
    case DELETE_JOB:
      //let newjobs = state.jobs.filter((job, index) => index != actions.payload);
      const newJobs = [...state.jobs];
      newJobs.splice(actions.payload, 1);
      newState = {
        ...state,
        jobs: newJobs
      };
      break;
    default:
      throw new Error('invalid action');
  }

  console.log('New sate: ', newState);
  return newState;

};


function App() {

  const [state, dispatch] = useReducer(reducer, initState);
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

export default App;
