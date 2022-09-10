import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useReducer } from 'react';

import {
  CLEAR_REPOS,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_REPOS,
  SEARCH_USERS,
  SET_LOADING,
} from '../types';
import githubContext from './githubContext';
import githubReducer from './githubReducer';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    repo: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search User
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Search Repositories
  const searchRepos = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: SEARCH_REPOS,
      payload: res.data.items,
    });
  };

  // Get User
  const getUser = async (userName) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  // Get Repos
  const getRepos = async (userName) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear Users
  const userClear = () => dispatch({ type: CLEAR_USERS });

  // Clear Repos
  const repoClear = () => dispatch({ type: CLEAR_REPOS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        searchRepos,
        userClear,
        repoClear,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

GithubState.propTypes = {
  children: PropTypes.any,
};

export default GithubState;
