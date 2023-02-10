import styled, { css } from "styled-components";

export const StyledBtn = styled.button`
  border-radius: 8px;

  ${({ btnSize }) => {
    switch (btnSize) {
      case "default":
        return css`
          width: 100%;
          padding: 10px 20px;
          font-family: "Inter";
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
        `;
      case "inputSearch":
        return css`
          padding: 10px 20px;
          font-family: "Inter";
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          margin-right: 10px;
        `;
      case "medium":
        return css`
          padding: 10px 20px;
          font-family: "Inter";
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
        `;
      case "delete":
        return css`
          font-family: "Inter";
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          height: fit-content;
        `;
    }
  }}

  ${({ btnStyleColor }) => {
    switch (btnStyleColor) {
      case "btnGrey":
        return css`
          background-color: var(--color-grey-20);
          border: 2px solid var(--color-grey-20);
          color: var(--color-grey-50);

          &:hover {
            background-color: var(--color-grey-50);
            border: 2px solid var(--color-grey-50);
            color: var(--color-grey-20);
          }
        `;
      case "btnGreen":
        return css`
          background-color: var(--color-primary);
          border: 2px solid var(--color-primary);
          color: var(--color-white);

          &:hover {
            background-color: var(--color-primary-50);
            border: 2px solid var(--color-primary-50);
            color: var(--color-white);
          }
        `;
      case "btnStyledDelete":
        return css`
          border: transparent;
          background-color: var(--color-grey-0);
          color: var(--color-grey-30);

          &:hover {
            border: transparent;
            text-decoration-line: underline;
            color: var(--color-grey-100);
          }
        `;
    }
  }}
`;
