import styled from "styled-components";

export const StyledInputSearch = styled.input`
  & {
    padding: 0px 10px 0px 15px;
    min-width: 150px;
    width: 50%;
    height: 60px;
    background-color: var(--color-white);
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    outline: none;

    &:focus {
      color: var(--color-grey-50);
    }

    &::placeholder {
      color: var(--color-grey-20);
    }
  }
`;
