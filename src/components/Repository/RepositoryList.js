import { useContext } from "react";
import { GithubContext } from "../../context/github-context";
import RepositoryCard from "./RepositoryCard";

import { CardContainer } from "./RepositoryListStyles";

const RepositoryList = (props) => {
  const { repositories } = useContext(GithubContext);

  return (
    <CardContainer>
      {repositories.map((repository) => (
        <RepositoryCard
          repository={repository}
          language={repository.language}
        />
      ))}
    </CardContainer>
  );
};

export default RepositoryList;
