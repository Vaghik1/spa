import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: ${({ $active }) => ($active ? '#007bff' : '#f8f9fa')};
    color: ${({ $active }) => ($active ? '#fff' : '#000')};
    cursor: pointer;

    &:hover {
        background-color: #007bff;
        color: #fff;
    }

    &:disabled {
        background-color: #e0e0e0;
        color: #a0a0a0;
        cursor: not-allowed;
    }
`;
