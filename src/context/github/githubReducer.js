import {
  CLEAR_REPOS,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_REPOS,
  SEARCH_USERS,
  SET_LOADING,
  SET_SEARCHED,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_SEARCHED:
      return {
        ...state,
        searched: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        loading: false,
        users: [],
      };
    case CLEAR_REPOS:
      return {
        ...state,
        loading: false,
        repos: [],
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
