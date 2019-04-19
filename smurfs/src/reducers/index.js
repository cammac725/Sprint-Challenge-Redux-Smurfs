/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  // ADD_SMURF_START,
  // ADD_SMURF_SUCCESS,
  // ADD_SMURF_FAIL
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  addingSmurf: false,
  error: ''
}
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: '',
        fetchingSmurf: true
      }

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        smurfs: action.payload,
        fetchingSmurf: false
      }

    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingSmurf: false
      }

    default: return state
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default reducer;