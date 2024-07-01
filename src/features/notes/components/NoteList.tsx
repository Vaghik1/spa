import React, { useState, useEffect } from 'react';
import { useNoteListStore } from '../store/useNoteListStore';
import { fetchNotes, createNote, deleteNote } from '../services/noteListService';
import { Container, Title, InputContainer, Input, AddButton, NoteContainer, NoteItem, NoteText, ActionButton } from './NoteList.styles';

const NoteList: React.FC = () => {
    const { notes, setNotes, addNote, removeNote } = useNoteListStore();
    const [noteInput, setNoteInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const notes = await fetchNotes();
            setNotes(notes);
        };
        fetchData();
    }, [setNotes]);

    const handleAddNote = async (event: React.FormEvent) => {
        event.preventDefault();
        if (noteInput.trim() === '') return;
        const newNote = {
            note: noteInput.trim(),
        };
        const addedNote = await createNote(newNote);
        addNote(addedNote);
        setNoteInput('');
    };

    const handleDeleteNote = async (id: string) => {
        await deleteNote(id);
        removeNote(id);
    };

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
                {notes.map(note => (
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
