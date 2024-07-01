import React, { useMemo, useState } from 'react';
import { Container, Title, SearchInput, Table, Th, Td, DetailsLink } from './UserList.styles';
import Pagination from '../../../shared/components/Pagination/Pagination';
import { USERS, USERS_PER_PAGE } from '../constants/users';
import { SortedField } from '../types/userListTypes';
import TransitionWrapper from '../../../shared/components/TransitionWrapper/TransitionWrapper';

const UserList: React.FC = () => {
    const [search, setSearch] = useState('');
    const [sortField, setSortField] = useState<SortedField>('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    
    const filteredUsers = useMemo(() => {
      return USERS
          .filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => {
              if (sortField) {
                  if (sortDirection === 'asc') {
                      return a[sortField] > b[sortField] ? 1 : -1;
                  } else {
                      return a[sortField] < b[sortField] ? 1 : -1;
                  }
              }
              return 0;
          });
    }, [search, sortField, sortDirection]);

    const totalPages = useMemo(() => {
        return Math.ceil(filteredUsers.length / USERS_PER_PAGE);
    }, [filteredUsers]);

    const paginatedUsers = useMemo(() => {
      const startIndex = (currentPage - 1) * USERS_PER_PAGE;
      return filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);
  }, [filteredUsers, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSort = (field: SortedField) => {
        const isAsc = sortField === field && sortDirection === 'asc';
        setSortField(field);
        setSortDirection(isAsc ? 'desc' : 'asc');
    };

    return (
        <TransitionWrapper>
            <Container>
                <Title>User List</Title>
                <div>
                    <SearchInput
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search users by name"
                    />
                </div>
                <Table>
                    <thead>
                        <tr>
                            <Th onClick={() => handleSort('name')}>Name {sortField === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : '↑↓'}</Th>
                            <Th>Email</Th>
                            <Th onClick={() => handleSort('age')}>Age {sortField === 'age' ? (sortDirection === 'asc' ? '↑' : '↓') : '↑↓'}</Th>
                            <Th>Actions</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.map(user => (
                            <tr key={user.id}>
                                <Td>{user.name}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.age}</Td>
                                <Td>
                                    <DetailsLink to={`/user/${user.id}`}>Details</DetailsLink>
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </Container>
        </TransitionWrapper>
    );
};

export default UserList;
