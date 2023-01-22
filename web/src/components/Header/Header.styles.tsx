import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  background-color: #d73035;
  color: #fff;
  justify-content: center;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  max-width: 1216px;
  align-items: center;

  .page-details {
    h1 {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 6px;
    }
    h2 {
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
    }
  }
`;
