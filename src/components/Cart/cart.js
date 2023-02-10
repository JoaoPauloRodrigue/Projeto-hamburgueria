import styled from "styled-components";

export const StyledCartContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    min-width: 300px;
    width: 100%;
  }

  @media (min-width: 1340px) {
    max-width: 365px;
    min-width: 300px;
    width: 100%;
  }

  .container-title-cart {
    max-width: 365px;
    width: 95%;
    height: 65px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 0px 0px;
  }

  .container-title-cart h2 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    color: var(--color-white);
  }

  .container-cart-empty {
    max-width: 365px;
    width: 95%;
    height: 158px;
    background-color: var(--color-0);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .container-cart-empty h2 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    color: var(--color-grey-100);
  }

  .container-cart-empty p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    color: var(--color-grey-50);
  }

  .container-cart-no-empty {
    max-width: 365px;
    width: 95%;
    max-height: 290px;
    height: max-content;
    min-height: 120px;
    background-color: var(--color-0);
    overflow-y: auto;
  }

  .container-cart-no-empty ul {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
`;
