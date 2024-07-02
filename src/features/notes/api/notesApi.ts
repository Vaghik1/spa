import { Note } from '../../types/NoteTypes';

const API_URL = `${process.env.REACT_APP_API_HOST}/notes`;

export const fetchNotes = async (): Promise<Note[] | undefined> => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
};

export const createNote = async (note: Omit<Note, 'id'>): Promise<Note | undefined> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating note:', error);
    }
};

export const deleteNote = async (id: string): Promise<void | undefined> => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error deleting note with id ${id}:`, error);
    }
};