import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
`;

export const SearchInput = styled.input`
  margin-right: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 12px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  min-width: 600px; /* Adjust as needed */
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9em;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9em;
  }
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

  @media (max-width: 768px) {
    margin-left: 5px;
    padding: 4px 8px;
    font-size: 0.9em;
  }
`;

export const DetailsLink = styled(Link)`
  color: #2196F3;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-right: 5px;
    font-size: 0.9em;
  }
`;
