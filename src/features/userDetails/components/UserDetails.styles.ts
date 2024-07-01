import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Detail = styled.p`
  margin: 10px 0;
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const BackButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  background-color: #2196F3;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #1E88E5;
  }
`;
