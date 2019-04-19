/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  LOADING,
  ERROR,
  FETCH_SMURF_SUCCESS,
  ADD_SMURF_SUCCESS,
  DELETE_SMURF_SUCCESS,
  UPDATE_SMURF_SUCCESS
} from '../actions';

const initialState = {
  smurfs: [],
  addingSmurf: false,
  deletingSmurf: false,
  updatingSmurf: false,
  loading: false,
  error: ''
}

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
        loading: false,
        addingSmurf: true
      }

    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: true,
        smurfs: action.payload,
        loading: false,
        error: ''
      }

    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        updatingSmurf: true,
        smurfs: action.payload,
        loading: false,
        error: ''
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

export default reducer;