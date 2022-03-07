import styled from "styled-components";
import { css } from "styled-components";
import { FiLogOut } from "react-icons/fi";

export const Wrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 100%;
  border: 5px solid white;

  @media only screen and (max-width: 600px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const Text = styled.p`
  margin: 0 2rem;

  // BIG
  ${(props) =>
    props.big &&
    css`
      font-size: 3rem;
      font-weight: 700;

      @media only screen and (max-width: 600px) {
        font-size: 2.5rem;
        text-align: center;
      }
    `}

  // MEDIUM
  ${(props) =>
    props.medium &&
    css`
      font-size: 2.3rem;

      @media only screen and (max-width: 600px) {
        font-size: 1.8rem;
      }
    `}
  
  // SMALL
  ${(props) =>
    props.small &&
    css`
      font-size: 1.8rem;

      @media only screen and (max-width: 600px) {
        font-size: 1.3rem;
      }
    `}

  // CARD
  ${(props) =>
    props.card &&
    css`
      background-color: transparent;
      width: 100%;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: 2px solid white;
      }
    `}

    ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.width &&
    css`
      width: 50%;
      border-radius: 10px;
      border: 2px solid white;
      overflow: hidden;

      @media only screen and (max-width: 880px) {
        width: 45rem;
        max-width: 100%;
      }
    `}

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
      margin: 1rem;
    `}
`;

export const Content = styled.div`
  width: 90rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Link = styled.a`
  color: #dc843a;
  text-decoration: none;
  max-width: 100%;
`;

export const LogoutIcon = styled(FiLogOut)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 3rem;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    margin-right: 0;
  }
`;
