import styled from "styled-components";
import { CgGitFork } from "react-icons/cg";
import { AiOutlineStar, AiFillEye } from "react-icons/ai";
import { css } from "styled-components";

export const Card = styled.a`
  width: 37rem;
  max-width: 100%;
  height: 15rem;
  background-color: ${(props) => props.color || "white"};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  border-radius: 4px;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: black;
  overflow: hidden;

  ${(props) =>
    props.padding &&
    css`
      padding: 1rem;

      @media only screen and (max-width: 600px) {
        padding: 0.5rem;
      }
    `}
  ${(props) =>
    props.description &&
    css`
      text-overflow: ellipsis;
      padding: 0 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      @media only screen and (max-width: 600px) {
        padding: 0 0.5rem;
      }
    `};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) =>
    props.padding &&
    css`
      padding: 1rem;

      @media only screen and (max-width: 600px) {
        padding: 0.5rem;
      }
    `}
`;

export const IconFork = styled(CgGitFork)`
  font-size: 2rem;
  color: black;
  display: flex;
  margin: 0 0.5rem 0 0.5rem;
`;

export const IconStar = styled(AiOutlineStar)`
  font-size: 2rem;
  color: black;
  display: flex;
  margin: 0 0.5rem 0 1rem;
`;

export const IconEye = styled(AiFillEye)`
  font-size: 2rem;
  color: black;
  display: flex;
  margin: 0 0.5rem 0 1rem;
`;
