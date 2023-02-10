import styled from "styled-components";

export const StyledProductContainer = styled.div`
  & li {
    width: 300px;
    height: 346px;
    border: 2px solid var(--color-grey-20);
    border-radius: 5px;

    &:hover {
      border: 2px solid var(--color-grey-100);
    }
  }

  .image-product {
    width: 100%;
    height: 150px;
    background-color: var(--color-0);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .image-product img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .container-information-product {
    display: flex;
    flex-direction: column;
    padding: 27px 0 27px 21px;
    gap: 14px;
  }

  & h2 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    color: var(--color-grey-100);
  }

  & p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-50);
  }

  & span {
    font-family: "Inter";
    font-weight: 600;
    font-size: 14px;
    color: var(--color-primary);
  }

  & button {
    width: 106px;
  }
`;
