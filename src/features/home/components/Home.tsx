import React from 'react';
import { Container} from './Home.styles';
import NoteList from '../../notes/components/NoteList';
import TransitionWrapper from '../../../shared/components/TransitionWrapper/TransitionWrapper';

const Home: React.FC = () => {
    return (
        <TransitionWrapper>
            <Container>
                <NoteList />
            </Container>
        </TransitionWrapper>
    );
};

export default Home;
