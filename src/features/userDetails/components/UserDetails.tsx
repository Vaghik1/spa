import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Detail, Strong, BackButton } from './UserDetails.styles';
import { USERS } from '../../userList/constants/users';

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const user = useMemo(() => USERS.find(user => user.id === id) || null, [id])

    if (!user) {
        return <Container>Loading...</Container>;
    }

    return (
        <Container>
            <img src={user.profilePicture} alt={user.name} />
            <Detail><Strong>Full Name:</Strong> {user.name}</Detail>
            <Detail><Strong>Email:</Strong> {user.email}</Detail>
            <Detail><Strong>Age:</Strong> {user.age}</Detail>
            <Detail><Strong>Address:</Strong> {user.address}</Detail>
            <BackButton onClick={() => navigate('/users')}>Back to User List</BackButton>
        </Container>
    );
};

export default UserDetails;
