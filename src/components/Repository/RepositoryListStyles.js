import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;

  @media only screen and (max-width: 1148px) {
    justify-content: space-around;
  }
`;
