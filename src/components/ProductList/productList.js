import styled from "styled-components";

export const StyledProductListContainer = styled.section`
  height: 346px;
  background-color: var(--color-white);

  & ul {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media (min-width: 700px) {
    max-width: 940px;
    height: 735px;
    overflow-y: auto;

    & ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      overflow-x: auto;
      gap: 18px;
    }
  }
`;
