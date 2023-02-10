import styled from "styled-components";

export const StyledCartTotal = styled.section`
  width: 343px;
  height: 122px;
  background-color: var(--color-0);
  border-top: 2px solid var(--color-grey-20);
  padding: 0 10px;
  border-radius: 0px 0px 5px 5px;

  & div {
    display: flex;
    padding: 14px 0px 24px 0px;
    justify-content: space-between;
  }

  & div h2 {
    font-family: "Inter";
    font-weight: 600;
    font-size: 14px;
    color: var(--color-grey-100);
  }

  & div span {
    font-family: "Inter";
    font-weight: 600;
    font-size: 14px;
    color: var(--color-grey-50);
  }
`;
