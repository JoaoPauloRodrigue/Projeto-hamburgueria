import styled from "styled-components";

export const StyledDashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 30px;

  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 23px 115px 0px 115px;
    gap: 0px;
  }
`;
