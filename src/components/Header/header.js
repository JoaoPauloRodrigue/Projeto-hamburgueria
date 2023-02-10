import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 139px;
  background-color: var(--color-0);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding: 0 115px;
  }

  & img {
    width: 150px;
    height: 52px;
    padding: 14px 0;

    @media (min-width: 700px) {
      width: 160px;
      height: 72px;
      padding: 24px 0;
    }
  }

  .container-input {
    display: flex;
    align-items: center;
    border: 2px solid var(--color-grey-20);
    border-radius: 8px;
    background-color: var(--color-white);
    max-width: 382px;
    width: 90%;

    &:hover {
      border: 2px solid var(--color-grey-100);
    }

    &:focus {
      border: 2px solid var(--color-grey-100);
    }
  }
`;
