/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  LOADING,
  FETCH_SMURF_SUCCESS,
  ERROR,
  ADD_SMURF_SUCCESS
} from '../actions';


const initialState = {
  smurfs: [],
  addingSmurf: false,
  loading: false,
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
    case LOADING:
      return {
        ...state,
        error: '',
        loading: true
      }

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        smurfs: action.payload,
        loading: false
      }

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        smurfs: action.payload,
        addingSmurf: true
      }

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
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