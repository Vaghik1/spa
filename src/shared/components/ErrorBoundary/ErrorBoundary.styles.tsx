import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  color: #721c24;
  text-align: center;
`;

export const ErrorTitle = styled.h1`
  font-size: 2em;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2em;
`;