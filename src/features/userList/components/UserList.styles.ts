import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  margin-right: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin-top: 12px;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const ActionButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  background-color: #f44336;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

export const DetailsLink = styled(Link)`
  color: #2196F3;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;