import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const Form = styled.form`
  width: 40rem;
  max-width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 1rem 3rem;
  font-size: 2rem;
  text-align: center;
  border-radius: 4px;
  border: 1px solid white;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const GithubLogo = styled(AiFillGithub)`
  font-size: 15rem;
  color: white;
  margin-bottom: 3rem;

  @media only screen and (max-width: 600px) {
    font-size: 10rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`;
