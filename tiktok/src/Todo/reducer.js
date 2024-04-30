
import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants';
// init state
export const initState = {
  job: '',
  jobs: []
};

// reducer
const reducer = (state, actions) => {
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

export default reducer;