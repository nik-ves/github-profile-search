import { useState, useContext } from "react";
import { GithubContext } from "../../context/github-context";

import { Wrapper, Form, Input, GithubLogo } from "./SearchFormStyles";

const SearchForm = (props) => {
  const [userInput, setUserInput] = useState("");
  const { getUserInfo } = useContext(GithubContext);

  const userInputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    getUserInfo(userInput);
  };

  return (
    <Wrapper>
      <GithubLogo />

      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          value={userInput}
          onChange={userInputChangeHandler}
          placeholder="Enter your Github username..."
        />
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
