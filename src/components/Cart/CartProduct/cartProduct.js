import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  max-width: 343px;
  height: 80px;
  background-color: var(--color-0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  .container-img-title-subtitle {
    display: flex;
    gap: 5px;
  }

  .container-img-sale-cart {
    background-color: var(--color-grey-20);
    border-radius: 5px;
    width: 70px;
    height: 70px;
  }

  .container-img-sale-cart img {
    width: 100%;
    height: 100%;
  }

  .container-information-product-sale {
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }

  .container-information-product-sale h2 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 14px;
    color: var(--color-grey-100);
  }

  .container-information-product-sale p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-50);
  }
`;
