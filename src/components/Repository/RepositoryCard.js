import {
  Card,
  Text,
  IconFork,
  IconEye,
  IconStar,
  Content,
} from "./RepositoryCardStyles";

import map from "language-map";

const RepositoryCard = ({ repository }) => {
  return (
    <Card
      color={map[repository?.language]?.color}
      href={repository.html_url}
      target="_blank"
    >
      <Text padding>{repository.name}</Text>
      <Text description>{repository.description}</Text>

      <Content padding>
        <Text>{repository.language}</Text>

        <Content>
          <IconStar /> <Text> {repository.stargazers_count}</Text>
          <IconEye /> <Text>{repository.watchers_count}</Text>
          <IconFork /> <Text>{repository.forks_count}</Text>
        </Content>
      </Content>
    </Card>
  );
};

export default RepositoryCard;
