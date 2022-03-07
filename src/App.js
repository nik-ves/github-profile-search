import GeneralStyles from "./GeneralStyles";
import Container from "./components/UI/Container";
import SearchForm from "./components/Form/SearchForm";
import Profile from "./components/Profile/Profile";
import RepositoryList from "./components/Repository/RepositoryList";

import { useContext } from "react";
import { GithubContext } from "./context/github-context";

function App() {
  const { currentUser } = useContext(GithubContext);

  return (
    <Container>
      <GeneralStyles />

      {!currentUser && <SearchForm />}

      {currentUser && <Profile />}

      {currentUser && <RepositoryList />}
    </Container>
  );
}

export default App;
