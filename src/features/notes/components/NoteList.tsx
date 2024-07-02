import React, { useState } from 'react';
import { fetchNotes, createNote, deleteNote } from '../api/notesApi';
import { Container, Title, InputContainer, Input, AddButton, NoteContainer, NoteItem, NoteText, ActionButton, ErrorMessage, LoadingMessage } from './NoteList.styles';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const queryKey = 'todos';

const NoteList: React.FC = () => {
    const queryClient = useQueryClient();
    const [noteInput, setNoteInput] = useState('');
    const {data: notes, error, isLoading} = useQuery({ queryKey: [queryKey], queryFn: fetchNotes });
    const postMutation = useMutation({
        mutationFn: createNote,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKey] });
          setNoteInput('');
        },
    });
    const deleteMutation = useMutation({
        mutationFn: deleteNote,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
    });

    const handleAddNote = async (event: React.FormEvent) => {
        event.preventDefault();
        if (noteInput.trim() === '') return;
        postMutation.mutate({
            note: noteInput.trim(),
        });
    };

    const handleDeleteNote = async (id: string) => {
        deleteMutation.mutate(id);
    };

    if(error) {
        return <ErrorMessage>Something went wrong</ErrorMessage>;
    }

    if(isLoading) {
        return <LoadingMessage>Loading...</LoadingMessage>
    }

    return (
        <Container>
            <Title>Notes</Title>
            <form onSubmit={handleAddNote}>
                <InputContainer>
                    <Input
                        type="text"
                        value={noteInput}
                        onChange={(e) => setNoteInput(e.target.value)}
                        placeholder="Enter a Note"
                    />
                    <AddButton type="submit">Add Note</AddButton>
                </InputContainer>
            </form>
            <NoteContainer>
                {notes?.map(note => (
                    <NoteItem key={note.id}>
                        <NoteText>{note.note}</NoteText>
                        <ActionButton onClick={() => handleDeleteNote(note.id)}>Delete</ActionButton>
                    </NoteItem>
                ))}
            </NoteContainer>
        </Container>
    );
};

export default NoteList;
