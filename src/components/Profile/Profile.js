import { useContext } from "react";
import { GithubContext } from "../../context/github-context";

import {
  Wrapper,
  ProfileImage,
  Text,
  TextContainer,
  Content,
  Link,
  LogoutIcon,
} from "./ProfileStyles";

const Profile = () => {
  const { currentUser, logoutUserHandler } = useContext(GithubContext);

  return (
    <Wrapper>
      <LogoutIcon onClick={logoutUserHandler} />

      <ProfileImage src={currentUser?.avatar_url} />

      <TextContainer column>
        <Text big>{currentUser?.name}</Text>
        <Text medium>
          <Link
            href={`https://github.com/${currentUser?.login}`}
            target="_blank"
          >
            @{currentUser?.login}
          </Link>
        </Text>
      </TextContainer>

      <Text center medium>
        {currentUser?.bio}
      </Text>

      <Content>
        <TextContainer column width>
          <Text card small>
            Repositories: {currentUser?.public_repos}
          </Text>
          <Text card small>
            Account created: {currentUser?.created_at.slice(0, 10)}
          </Text>
          <Text card small>
            Following: {currentUser?.following}
          </Text>
          <Text card small>
            Followers: {currentUser?.followers}
          </Text>
        </TextContainer>

        <TextContainer column width>
          <Text card small>
            Location: {currentUser?.location || "Not listed!"}
          </Text>
          <Text card small>
            Company: {currentUser?.company || "Not listed!"}
          </Text>
          <Text card small>
            Blog:
            {currentUser?.blog ? (
              <Link href={`${currentUser?.blog}`}> {currentUser?.blog}</Link>
            ) : (
              " Not listed!"
            )}
          </Text>
          <Text card small>
            Email:
            {currentUser?.email ? (
              <Link href={`mailto:${currentUser?.email}`} target="_blank">
                {currentUser?.email}
              </Link>
            ) : (
              " Not listed!"
            )}
          </Text>
        </TextContainer>
      </Content>
    </Wrapper>
  );
};

export default Profile;
