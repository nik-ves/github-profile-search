import React, { useState } from "react";
import axios from "axios";

export const GithubContext = React.createContext({
  currentUser: {},
  logoutUserHandler: () => {},
  repositories: [],
  getUserInfo: () => {},
});

const GithubContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const getUserInfo = async (user) => {
    await axios
      .get(`https://api.github.com/users/${user}`)
      .then((data) => setCurrentUser(data.data));

    await axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((data) => setRepositories(data.data));
  };

  const logoutUserHandler = () => {
    setCurrentUser(null);
  };

  const providerValue = {
    getUserInfo,
    repositories,
    currentUser,
    logoutUserHandler,
  };

  return (
    <GithubContext.Provider value={providerValue}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContextProvider;
